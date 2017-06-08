using System;
using System.Data.Entity;
using TestReactApp.Models;
using System.Data.Entity.ModelConfiguration;
using System.Data.Entity.ModelConfiguration.Conventions;

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
        public DbSet<RoomEquipment> RoomEquipment { get; set; }
    }
}