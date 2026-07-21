using Microsoft.AspNetCore.Mvc;
using FirstWebApi.Models;

namespace FirstWebApi.Controllers
{
    [ApiController]
    [Route("api/Emp")]
    public class EmployeeController : ControllerBase
    {
        // Hardcoded Employee List
        private static List<Employee> employees = new List<Employee>
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

        // GET : api/Emp
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public ActionResult<List<Employee>> GetStandard()
        {
            return Ok(employees);
        }

        // GET : api/Emp/1
        [HttpGet("{id}")]
        public ActionResult<Employee> GetEmployee(int id)
        {
            var emp = employees.FirstOrDefault(e => e.Id == id);

            if (emp == null)
                return NotFound();

            return Ok(emp);
        }

        // POST : api/Emp
        [HttpPost]
        public ActionResult<Employee> AddEmployee([FromBody] Employee employee)
        {
            employees.Add(employee);

            return Ok(employee);
        }

        // PUT : api/Emp/1
        [HttpPut("{id}")]
        public ActionResult<Employee> UpdateEmployee(int id, [FromBody] Employee employee)
        {
            // Check invalid id
            if (id <= 0)
            {
                return BadRequest("Invalid employee id");
            }

            // Check employee exists
            var existingEmployee = employees.FirstOrDefault(e => e.Id == id);

            if (existingEmployee == null)
            {
                return BadRequest("Invalid employee id");
            }

            // Update employee details
            existingEmployee.Name = employee.Name;
            existingEmployee.Salary = employee.Salary;
            existingEmployee.Permanent = employee.Permanent;
            existingEmployee.DateOfBirth = employee.DateOfBirth;
            existingEmployee.Department = employee.Department;
            existingEmployee.Skills = employee.Skills;

            return Ok(existingEmployee);
        }

        // DELETE : api/Emp/1
        [HttpDelete("{id}")]
        public ActionResult DeleteEmployee(int id)
        {
            var emp = employees.FirstOrDefault(e => e.Id == id);

            if (emp == null)
            {
                return BadRequest("Invalid employee id");
            }

            employees.Remove(emp);

            return Ok($"Employee with Id {id} deleted successfully.");
        }
    }
}