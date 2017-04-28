using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TraineeshipWebApp.ViewModels;

namespace TestReactApp.ViewModels
{
    public class OrganizationModel
    {
        public OrganizationModel()
        {
            this.Buildings = new List<BuildingModel>();
        }
        public List<BuildingModel> Buildings { get; set; }

    }
}