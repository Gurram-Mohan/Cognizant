using FirstWebApi.Filters;
using Microsoft.AspNetCore.Mvc;
using FirstWebApi.Models;

namespace FirstWebApi.Controllers
{
    [ApiController]
    [Route("api/Emp")]
    //[ServiceFilter(typeof(CustomAuthFilter))]
    public class EmployeeController : ControllerBase
    {
        private List<Employee> GetStandardEmployeeList()
        {
            return new List<Employee>
            {
                new Employee
                {
                    Id = 1,
                    Name = "John",
                    Salary = 50000,
                    Permanent = true,
                    DateOfBirth = new DateTime(1995, 5, 20),
                    Department = new Department
                    {
                        Id = 101,
                        Name = "IT"
                    },
                    Skills = new List<Skill>
                    {
                        new Skill
                        {
                            Id = 1,
                            Name = "C#"
                        },
                        new Skill
                        {
                            Id = 2,
                            Name = "ASP.NET Core"
                        }
                    }
                },

                new Employee
                {
                    Id = 2,
                    Name = "Alice",
                    Salary = 45000,
                    Permanent = false,
                    DateOfBirth = new DateTime(1997, 10, 15),
                    Department = new Department
                    {
                        Id = 102,
                        Name = "HR"
                    },
                    Skills = new List<Skill>
                    {
                        new Skill
                        {
                            Id = 3,
                            Name = "Communication"
                        },
                        new Skill
                        {
                            Id = 4,
                            Name = "Recruitment"
                        }
                    }
                }
            };
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<List<Employee>> GetStandard()
        {
            throw new Exception("This is a custom exception for testing.");
        }

        [HttpGet("{id}")]
        public ActionResult<Employee> GetEmployee(int id)
        {
            var emp = GetStandardEmployeeList().FirstOrDefault(e => e.Id == id);

            if (emp == null)
                return NotFound();

            return Ok(emp);
        }

        [HttpPost]
        public ActionResult<Employee> AddEmployee([FromBody] Employee employee)
        {
            return Ok(employee);
        }

        [HttpPut("{id}")]
        public ActionResult<Employee> UpdateEmployee(int id, [FromBody] Employee employee)
        {
            return Ok(employee);
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteEmployee(int id)
        {
            return Ok($"Employee with Id {id} deleted successfully.");
        }
    }
}