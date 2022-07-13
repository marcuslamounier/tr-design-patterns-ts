import VehicleBuilder from "./builders/VehicleBuilder";
import Director from "./director/Director";
import Vehicle from "./products/Vehicle";

const builder = new VehicleBuilder();
const director = new Director(builder);

director.constructSedanCar();

const sedan: Vehicle = builder.getVehicle();

console.log(
  `Created a ${sedan.vehicleType} vehicle ` +
  `with ${sedan.wheelsTotal} wheels`
);

director.constructTruck();
const truck: Vehicle = builder.getVehicle();

console.log(
  `Created a ${truck.vehicleType} vehicle ` +
  `with ${truck.wheelsTotal} wheels`
);

director.constructMotorcycle();
const motorcycle: Vehicle = builder.getVehicle();

console.log(
  `Created a ${truck.vehicleType} vehicle with ${truck.wheelsTotal} wheels`
);

console.log(
  `Created a ${motorcycle.vehicleType} vehicle ` +
  `with ${motorcycle.wheelsTotal} wheels`
);
