using System;
using System.Collections.Generic;
using System.Web.Script.Serialization;
using TestReactApp.Models;

namespace TraineeshipWebApp.Models
{
    public class Room
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int? BuildingId { get; set; }
        public Building Building { get; set; }
        public List<RoomEquipment> RoomEquipment { get; set; }
        //public List<RoomEquipment> RoomEquipment { get; set; }
        public Room()
        {
            this.RoomEquipment = new List<RoomEquipment>();
        }
    }
}