using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SampleWebApiCore.Models
{
    [Table("AirlineTable")]
    public class Airline
    {
        [Key]
        public int airlineId { get; set; }
        public string Name { get; set; }
        public string Destination { get; set; }
        public int Fare { get; set; }
        public string Image { get; set; }

    }
    public class MyDbContext : DbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext>options) : base(options)
        {

        }
        public DbSet<Airline> Airlines { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Airline>().HasData(
                 new Airline { airlineId = 111, Name = "Air India", Destination = "Mysore", Fare = 2500 ,Image= "https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&w=600" },

                new Airline { airlineId = 112, Name = "India", Destination = "Bangalore", Fare = 3500,Image= "https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=600" }
                );
        }
    }
}
