using System;
using System.Collections.Generic;
using TraineeshipWebApp.ViewModels;
using System.Linq;
using TraineeshipWebApp.Models;
using TestReactApp.ViewModels;
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
        public void Initialize(FactoryContext factoryContext, Room room)
        {
            this.Name = room.Title;
            this.RoomId = room.Id;

            foreach (var roomEquipment in factoryContext.RoomEquipment)
            {
                if (roomEquipment.RoomId == room.Id)
                {
                    var equipmentModel = new EquipmentModel();
                    equipmentModel.Initialize(roomEquipment);
                    this.Equipment.Add(equipmentModel);

                }
            }
        }
    }
}