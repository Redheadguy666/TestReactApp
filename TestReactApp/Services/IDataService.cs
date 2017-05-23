using System;
using System.Collections.Generic;
using TraineeshipWebApp.Models;
using System.Web.Mvc;
using TraineeshipWebApp.ViewModels;
using TestReactApp.ViewModels;

namespace TraineeshipWebApp
{
    public interface IDataService
    {
        OrganizationModel GetData();
        void AddEquipment(EquipmentModel equipmentModel);
        void UpdateEquipment(EquipmentModel equipmentModel);
        void DeleteEquipment(EquipmentModel equipmentModel);
    }
}
