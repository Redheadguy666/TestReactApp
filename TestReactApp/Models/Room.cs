using System;
using System.Collections.Generic;
using System.Web.Script.Serialization;

namespace TraineeshipWebApp.Models
{
    public class Room
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public List<Equipment> RoomEquipment { get; set; }
        public Room()
        {
            this.RoomEquipment = new List<Equipment>();
        }
    }
}