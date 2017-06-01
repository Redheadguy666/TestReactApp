using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;

namespace TraineeshipWebApp.Models
{
    public class Equipment
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public List<Room> EquipmentInRoom { get; set; }
        public Equipment()
        {
            this.EquipmentInRoom = new List<Room>();
        }
    }
}