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
        public int Number { get; set; }
        public int? RoomId { get; set; }
        public Room Room { get; set; }
    }
}