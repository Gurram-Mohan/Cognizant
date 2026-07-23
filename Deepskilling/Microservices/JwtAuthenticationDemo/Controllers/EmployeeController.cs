using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace JwtAuthenticationDemo.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : ControllerBase
    {
        [HttpGet]
        [Authorize]
        public IActionResult GetEmployees()
        {
            return Ok(new[]
            {
                "John",
                "David",
                "Alice",
                "Robert"
            });
        }
    }
}