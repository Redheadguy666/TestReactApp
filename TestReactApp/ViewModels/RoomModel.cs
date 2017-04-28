using System;
using System.Collections.Generic;
using TraineeshipWebApp.ViewModels;
using TraineeshipWebApp.Models;

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

            foreach (var equipment in room.Children)
            {
                var equipmentModel = new EquipmentModel();
                equipmentModel.Initialize(equipment);
                this.Equipment.Add(equipmentModel);
            }

        }
    }
}