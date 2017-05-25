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
        public string AddEquipment(EquipmentModel equipmentModel)
        {
            this.DataService.AddEquipment(equipmentModel);
            return this.GetData();
        }

        [ActionName("UpdateEquipment")]
        public string UpdateEquipment(EquipmentModel equipmentModel)
        {
            this.DataService.UpdateEquipment(equipmentModel);
            return this.GetData();
        }

        [ActionName("DeleteEquipment")]
        public string DeleteEquipment(EquipmentModel equipmentModel)
        {
            this.DataService.DeleteEquipment(equipmentModel);
            return this.GetData();
        }

        private string JsonSerializeObject(object data)
        {
            return JsonConvert.SerializeObject(data, Formatting.None,
                this.JsonSerializerSettings);
        }
    }
}