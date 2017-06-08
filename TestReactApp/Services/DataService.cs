using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using System.Data.Entity;
using TraineeshipWebApp.Models;
using TraineeshipWebApp.ViewModels;
using TestReactApp.ViewModels;
using TestReactApp.Models;

namespace TraineeshipWebApp
{
    public class DataService : IDataService
    {
        private FactoryContext factoryContext = new FactoryContext();

        public OrganizationModel GetData()
        {
            var organizationModel = new OrganizationModel();

            //Получаем здания и комнаты с бд
            var data = factoryContext.Buildings.Include(r => r.Children).ToList();
            
            foreach (var item in data)
            {
                var buildingModel = new BuildingModel();
                buildingModel.Initialize(factoryContext, item);
                organizationModel.Buildings.Add(buildingModel);
            }

            return organizationModel;
        }

        public void AddEquipment(EquipmentModel equipmentModel)
        {
            var equipment = factoryContext.Equipment.Where(eq => eq.Title == equipmentModel.Title).ToList();

            if (equipment.Count == 0)
            {
                factoryContext.Equipment.Add(new Equipment()
                    { Title = equipmentModel.Title });

                factoryContext.RoomEquipment.Add(new RoomEquipment()
                    { RoomId = (int)equipmentModel.RoomId, EquipmentId = equipmentModel.Id, EquipmentNumber = equipmentModel.Number });
            }

            else
            {
                var equipmentForRoom = factoryContext.RoomEquipment.Find(equipmentModel.Id);
                equipmentForRoom.EquipmentNumber += equipmentModel.Number;
                factoryContext.Entry(equipmentForRoom).State = EntityState.Modified;
            }

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