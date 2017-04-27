using System;
using System.Collections.Generic;
using Ninject;
using TraineeshipWebApp.Models;
using System.Web.Mvc;

namespace TraineeshipWebApp.NinjectInitialize
{
    public class NinjectDependencyResolver : IDependencyResolver
    {
        private IKernel kernel;

        public NinjectDependencyResolver(IKernel kernelParam)
        {
            this.kernel = kernelParam;
            AddBindings();
        }

        public object GetService(Type serviceType) => kernel.TryGet(serviceType);
        public IEnumerable<object> GetServices(Type serviceType) => kernel.GetAll(serviceType);

        private void AddBindings()
        {
            kernel.Bind<IDataService>().To<DataService>();
        }
    }
}