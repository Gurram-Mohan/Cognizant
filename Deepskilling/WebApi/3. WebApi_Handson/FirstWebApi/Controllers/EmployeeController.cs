using Microsoft.AspNetCore.Mvc;
using FirstWebApi.Models;

namespace FirstWebApi.Controllers
{
    [ApiController]
    [Route("api/Emp")]
    public class EmployeeController : ControllerBase
    {
        private static List<Employee> employees = new List<Employee>
        {
            new Employee { Id = 1, Name = "John", Department = "IT", Salary = 50000 },
            new Employee { Id = 2, Name = "Alice", Department = "HR", Salary = 45000 }
        };

        [HttpGet]
        public ActionResult<IEnumerable<Employee>> GetEmployees()
        {
            return Ok(employees);
        }

        [HttpGet("{id}")]
        public ActionResult<Employee> GetEmployee(int id)
        {
            var emp = employees.FirstOrDefault(e => e.Id == id);

            if (emp == null)
                return NotFound();

            return Ok(emp);
        }

        [HttpPost]
        public ActionResult AddEmployee(Employee employee)
        {
            employees.Add(employee);
            return Ok(employee);
        }

        [HttpPut("{id}")]
        public ActionResult UpdateEmployee(int id, Employee employee)
        {
            var emp = employees.FirstOrDefault(e => e.Id == id);

            if (emp == null)
                return NotFound();

            emp.Name = employee.Name;
            emp.Department = employee.Department;
            emp.Salary = employee.Salary;

            return Ok(emp);
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteEmployee(int id)
        {
            var emp = employees.FirstOrDefault(e => e.Id == id);

            if (emp == null)
                return NotFound();

            employees.Remove(emp);

            return Ok();
        }
    }
}