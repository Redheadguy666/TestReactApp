using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using System.Data.Entity;
using TraineeshipWebApp.Models;
using TraineeshipWebApp.ViewModels;
using TestReactApp.Models;
using TestReactApp.ViewModels;

namespace TraineeshipWebApp
{
    public class DataService : IDataService
    {
        private FactoryContext factoryContext = new FactoryContext();

        public OrganizationModel GetData()
        {
            var organizationModel = new OrganizationModel();

            var buildings = factoryContext.Buildings.Include(x => x.Children);

            var data = (from room in buildings
                        join re in factoryContext.RoomEquipment on room.Id equals re.RoomId
                        join equip in factoryContext.Equipment on re.EquipmentId equals equip.Id
                        select new
                        {
                            Id = equip.Id,
                            Title = equip.Title
                        });

            foreach (var item in data)
            {
                var buildingModel = new BuildingModel();
                buildingModel.Initialize(item);
                organizationModel.Buildings.Add(buildingModel);
            }

            return organizationModel;
        }

        public void AddEquipment(EquipmentModel equipmentModel)
        {
            factoryContext.Equipment.Add(new Equipment()
                { Title = equipmentModel.Title });

            factoryContext.RoomEquipment.Add(new RoomEquipment()
                { RoomId = (int)equipmentModel.RoomId, EquipmentId = equipmentModel.Id, EquipmentNumber = equipmentModel.Number });

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