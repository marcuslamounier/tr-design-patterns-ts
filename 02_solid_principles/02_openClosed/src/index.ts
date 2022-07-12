import Car from "./Car";
import Motorcycle from "./Motorcycle";
import TypeVehicle from "./TypeVehicle";

const typeVehicle = TypeVehicle.MOTORCYCLE;
let vehicle = (typeVehicle === TypeVehicle.CAR)
  ? new Car('Yellow', 2022, 2.0, 4, 4)
  : new Motorcycle('Yellow', 2022, 2.0);