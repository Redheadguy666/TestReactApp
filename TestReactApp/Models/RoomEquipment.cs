using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using TraineeshipWebApp.Models;

namespace TestReactApp.Models
{
    public class RoomEquipment
    {
        [Key, Column(Order = 0), ForeignKey("Room")]
        public int RoomId { get; set; }
        [Key, Column(Order = 1), ForeignKey("Equipment")]
        public int EquipmentId { get; set; }
        public virtual Room Room { get; set; }
        public virtual Equipment Equipment { get; set; }
        public int EquipmentNumber { get; set; }
    }
}