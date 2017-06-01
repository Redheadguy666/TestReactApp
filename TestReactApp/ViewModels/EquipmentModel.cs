using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TestReactApp.Models;
using TraineeshipWebApp.Models;

namespace TraineeshipWebApp.ViewModels
{
    public class EquipmentModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int Number { get; set; }
        public int? RoomId { get; set; }

        public void Initialize(Equipment equipment, RoomEquipment roomEquipment)
        {
            this.Id = equipment.Id;
            this.Title = equipment.Title;
            this.Number = roomEquipment.EquipmentNumber;
            this.RoomId = roomEquipment.RoomId;
        }
    }
}