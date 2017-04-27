using System;
using TraineeshipWebApp.Models;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TraineeshipWebApp.ViewModels
{
    public class RoomModel
    {
        public int Id { get; set; }
        public string title { get; set; }

        public void Initialize(Room room)
        {
            this.Id = room.Id;
            this.title = room.Title;
        }
    }
}