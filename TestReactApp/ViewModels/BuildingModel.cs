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
            this.Rooms = new List<RoomModel>();
        }

        public int Id { get; set; }
        public string Title { get; set; }
        public List<RoomModel> Rooms { get; set; }
        public void Initialize(Building building)
        {
            this.Id = building.Id;
            this.Title = building.Title;

            foreach (var room in building.Children)
            {
                var roomModel = new RoomModel();
                roomModel.Initialize(room);
                this.Rooms.Add(roomModel);
            }

        }
    }
}