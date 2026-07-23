using JwtAuthenticationDemo.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace JwtAuthenticationDemo.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        // Secret Key (same as Program.cs)
        private const string SecretKey = "mysuperdupersecretkey123456789012";

        [HttpPost]
        public IActionResult Authenticate([FromBody] User user)
        {
            if (user == null)
                return BadRequest();

            if (user.UserName == "admin" && user.Password == "pwd")
            {
                var tokenHandler = new JwtSecurityTokenHandler();

                var key = Encoding.UTF8.GetBytes(SecretKey);

                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new[]
                    {
                        new Claim(ClaimTypes.Name, user.UserName),
                        new Claim(ClaimTypes.Role, "Admin")
                    }),

                    // Temporary expiry for Exercise 4
                    Expires = DateTime.UtcNow.AddHours(1),

                    Issuer = "mySystem",
                    Audience = "myUsers",

                    SigningCredentials = new SigningCredentials(
                        new SymmetricSecurityKey(key),
                        SecurityAlgorithms.HmacSha256Signature)
                };

                var token = tokenHandler.CreateToken(tokenDescriptor);

                return Ok(new
                {
                    Token = tokenHandler.WriteToken(token)
                });
            }

            return Unauthorized();
        }
    }
}