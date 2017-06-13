using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TraineeshipWebApp.Models
{
    public class Building
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public List<Room> Children { get; set; }
        public Building()
        {
            Children = new List<Room>();
        }
    }
}