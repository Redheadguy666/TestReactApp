using System;
using System.Collections.Generic;

namespace TraineeshipWebApp.Models
{
    public class Room
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public List<Equipment> RoomEquipment { get; set; }
        public Room()
        {
            RoomEquipment = new List<Equipment>();
        }
    }
}