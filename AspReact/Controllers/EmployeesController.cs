using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AspReact.Models;
using System.Web.Http.Cors;

namespace AspReact.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    
    public class EmployeesController : ControllerBase
    {
        [HttpGet]
        [EnableCors("*", "*", "*")]
        public List<Employee> Get()
        {
            List<Employee> ec = new List<Employee>
            {
                new Employee {Id= 0, Name = "Norma"},
                new Employee {Id= 1, Name = "Luck"},
                new Employee {Id= 2, Name = "Saramago"},
                new Employee {Id= 3, Name = "Bacon"},
            };
            return ec;
        }
    }
}
