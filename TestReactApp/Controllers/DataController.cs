using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using TraineeshipWebApp.ViewModels;
using System.Web.Mvc;
using Ninject;

namespace TraineeshipWebApp.Controllers
{
    public class DataController : Controller
    {
        private JsonSerializerSettings jsonSerializerSettings;

        public JsonSerializerSettings JsonSerializerSettings
        {
            get
            {
                return this.jsonSerializerSettings ?? (this.jsonSerializerSettings = new JsonSerializerSettings
                {
                    ContractResolver = new CamelCasePropertyNamesContractResolver()
                });             
            }
        }

        [Inject]
        public IDataService DataService { get; set; }

        [ActionName("GetData")]
        public string GetData()
        {
            var data = this.DataService.GetData();      
            return this.JsonSerializeObject(data);
        }

        [ActionName("AddEquipment")]
        public void AddEquipment(EquipmentModel equipmentModel)
        {
            this.DataService.AddEquipment(equipmentModel);
        }

        [ActionName("UpdateEquipment")]
        public void UpdateEquipment(EquipmentModel equipmentModel)
        {
            this.DataService.UpdateEquipment(equipmentModel);
        }

        [ActionName("DeleteEquipment")]
        public void DeleteEquipment(int equipmentId)
        {
            this.DataService.DeleteEquipment(equipmentId);
        }

        private string JsonSerializeObject(object data)
        {
            return JsonConvert.SerializeObject(data, Formatting.None,
                this.JsonSerializerSettings);
        }
    }
}