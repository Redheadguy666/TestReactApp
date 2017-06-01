using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using System.Data.Entity;
using TraineeshipWebApp.Models;
using TraineeshipWebApp.ViewModels;
using TestReactApp.ViewModels;

namespace TraineeshipWebApp
{
    public class DataService : IDataService
    {
        private FactoryContext factoryContext = new FactoryContext();

        public OrganizationModel GetData()
        {
            var organizationModel = new OrganizationModel();

            var buildings = factoryContext.Buildings.Include(x => x.Children.Select(c => c.RoomEquipment)).ToList();

            foreach (var item in buildings)
            {
                var buildingModel = new BuildingModel();
                buildingModel.Initialize(item);
                organizationModel.Buildings.Add(buildingModel);
            }

            return organizationModel;
        }

        public void AddEquipment(EquipmentModel equipmentModel)
        {
            //TODO: Изменить инициализацию полей
            //factoryContext.Equipment.Add(new Equipment()
            //    { Title = equipmentModel.Title, RoomId = equipmentModel.RoomId, Number = equipmentModel.Number });
            factoryContext.SaveChanges();
        }

        public void UpdateEquipment(EquipmentModel equipmentModel)
        {
            Equipment equipment = factoryContext.Equipment.Find(equipmentModel.Id);

            if (equipment == null)
            {
                throw new ArgumentException(nameof(equipmentModel));
            }

            equipment.Title = equipmentModel.Title;
            //TODO: Изменить инициализацию полей
            //equipment.Number = equipmentModel.Number;
            factoryContext.Entry(equipment).State = EntityState.Modified;
            factoryContext.SaveChanges();
        }

        public void DeleteEquipment(EquipmentModel equipmentModel)
        {
            Equipment equipment = factoryContext.Equipment.Find(equipmentModel.Id);

            if (equipment == null)
            {
                throw new ArgumentException(nameof(equipmentModel.Id));
            }

            factoryContext.Equipment.Remove(equipment);
            factoryContext.SaveChanges();
        }
    }
}