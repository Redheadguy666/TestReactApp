using System;
using TraineeshipWebApp.Models;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TraineeshipWebApp.ViewModels
{
    public class BuildingModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public bool IsFolder { get; set; } = true;

        public void Initialize(Building building)
        {
            this.Id = building.Id;
            this.Title = building.Title;
        }
    }
}