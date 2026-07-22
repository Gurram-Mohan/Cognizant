using FirstWebApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace FirstWebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        [HttpPost]
        public IActionResult Authenticate([FromBody] User user)
        {
            if (user == null)
                return BadRequest();

            if (user.UserName == "admin" && user.Password == "pwd")
            {
                var tokenHandler = new JwtSecurityTokenHandler();
                
                var key = Encoding.UTF8.GetBytes("ThisIsMyVeryStrongJwtSecretKey12345");

                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new[]
                    {
                        new Claim(ClaimTypes.Name, user.UserName)
                    }),

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