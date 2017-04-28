using System;
using TraineeshipWebApp.Models;
using System.Collections.Generic;
using TestReactApp.ViewModels;

namespace TraineeshipWebApp.ViewModels
{
    public class BuildingModel
    {
        public BuildingModel()
        {
            var room = new RoomModel();
        }

        public int Id { get; set; }
        public string Title { get; set; }
        public List<RoomModel> Rooms { get; set; }
        public void Initialize(Building building)
        {
            this.Id = building.Id;
            this.Title = building.Title;
        }
    }
}