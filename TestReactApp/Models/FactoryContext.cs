using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace TraineeshipWebApp.Models
{
    public class FactoryContext : DbContext
    {
        public FactoryContext()
            :base("DefaultConnection")
        {}

        public DbSet<Building> Buildings { get; set; }
        public DbSet<Room> Rooms { get; set; }
        public DbSet<Equipment> Equipment { get; set; }
    }
}