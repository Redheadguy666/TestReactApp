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

            var buildings = factoryContext.Buildings.Include(p => p.Children);//.Include(p => p.Children.;


            foreach (var item in buildings)
            {
                var buildingModel = new BuildingModel();
                buildingModel.Initialize(item);
                organizationModel.Buildings.Add(buildingModel);
            }

            return organizationModel;
        }

        public List<EquipmentModel> GetDataById(int id, bool isFolder)
        {
            var equipmentModels = new List<EquipmentModel>();

            if (isFolder) //Запрос оборудования для всего здания
            {
                var equipment = (from b in factoryContext.Buildings
                                 join r in factoryContext.Rooms
                                 on b.Id equals r.BuildingId
                                 join e in factoryContext.Equipment
                                 on r.Id equals e.RoomId
                                 where b.Id == id
                                 select new Equipment
                                 {
                                     Title = e.Title,
                                     Number = e.Number,
                                     RoomId = e.RoomId
                                 });

                foreach (var item in equipment)
                {
                    var equipmentModel = new EquipmentModel();
                    equipmentModel.Initialize(item);
                    equipmentModels.Add(equipmentModel);
                }

            }

            else            //Запрос оборудования комнаты
            {
                var equipment = (from e in factoryContext.Equipment
                                 where e.RoomId == id
                                 select new Equipment
                                 {
                                     Id = e.Id,
                                     Title = e.Title
                                 });

                foreach (var item in equipment)
                {
                    var equipmentModel = new EquipmentModel();
                    equipmentModel.Initialize(item);
                    equipmentModels.Add(equipmentModel);
                }
            }
            return equipmentModels;
        }

        public void AddEquipment(EquipmentModel equipmentModel)
        {
            factoryContext.Equipment.Add(new Equipment()
                { Title = equipmentModel.Title, RoomId = equipmentModel.RoomId });
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
            factoryContext.Entry(equipment).State = EntityState.Modified;
            factoryContext.SaveChanges();
        }

        public void DeleteEquipment(int equipmentId)
        {
            Equipment equipment = factoryContext.Equipment.Find(equipmentId);

            if (equipment == null)
            {
                throw new ArgumentException(nameof(equipmentId));
            }

            factoryContext.Equipment.Remove(equipment);
            factoryContext.SaveChanges();
        }
    }
}