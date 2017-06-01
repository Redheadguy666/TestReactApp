using System;
using System.Collections.Generic;
using System.Web.Script.Serialization;

namespace TraineeshipWebApp.Models
{
    public class Room
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int? BuildingId { get; set; }
        public Building Building { get; set; }
        public List<Equipment> Children { get; set; }

        public Room()
        {
            Children = new List<Equipment>();
        }
    }
}