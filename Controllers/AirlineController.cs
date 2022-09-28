using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SampleWebApiCore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SampleWebApiCore.Controllers
{
    [ApiController]
    public class AirlineController : ControllerBase
    {
        private MyDbContext _context = null;
        public AirlineController(MyDbContext context)
        {
            _context = context;
        }
        [Route("Airline/All")]
        public List<Airline> GetAll() => _context.Airlines.ToList();

        [Route("Airline/{AirlineId}")]
        public Airline GetAir(int AirlineId) => _context.Airlines.FirstOrDefault((a) => a.airlineId == AirlineId);
        [Route("Airline")]
        [HttpPost]
        public string AddNew(Airline air)
        {
            _context.Airlines.Add(air);
            _context.SaveChanges();
            return "Flight added to the server";
        }
        [Route("Airline")]
        [HttpPut]
        public string Update(Airline air)
        {
            var selected = _context.Airlines.FirstOrDefault((a) => a.airlineId == air.airlineId);
            if (selected == null) return "Flight not found to update";
            selected.Name = air.Name;
            selected.Destination = air.Destination;
            selected.Fare = air.Fare;
            selected.Image = air.Image;
            _context.SaveChanges();
            return "Flight updated in the server";
        }
        [Route("Airline/{airlineId}")]
        [HttpDelete]
        public string Delete(int airlineId)
        {
            var foundRec = _context.Airlines.FirstOrDefault((a) => a.airlineId == airlineId);
            if (foundRec == null) return "No Records Found";
            _context.Airlines.Remove(foundRec);
            _context.SaveChanges();
            return "Data is Deleted";
        }



    }
}
