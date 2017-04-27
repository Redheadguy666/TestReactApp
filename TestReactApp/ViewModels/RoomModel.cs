using System;
using System.Collections.Generic;
using TraineeshipWebApp.ViewModels;


namespace TestReactApp.ViewModels
{
    public class RoomModel
    {
        public RoomModel()
        {
            var equipment = new EquipmentModel();
        }

        public int RoomId { get; set; }
        public string Name { get; set; }

        public List<EquipmentModel> Equipment { get; set; }
    }
}