using System;
using System.Collections.Generic;
using TraineeshipWebApp.ViewModels;
using TraineeshipWebApp.Models;
using TestReactApp.Models;

namespace TestReactApp.ViewModels
{
    public class RoomModel
    {
        public RoomModel()
        {
            this.Equipment = new List<EquipmentModel>();
        }
        public int RoomId { get; set; }
        public string Name { get; set; }
        public List<EquipmentModel> Equipment { get; set; }
        public void Initialize(Room room)
        {
            this.Name = room.Title;
            this.RoomId = room.Id;

            foreach (var equipment in room.RoomEquipment)
            {
                var equipmentModel = new EquipmentModel();
                var roomEquipment = new RoomEquipment();
                equipmentModel.Initialize(equipment, roomEquipment);
                this.Equipment.Add(equipmentModel);
            }

        }
    }
}