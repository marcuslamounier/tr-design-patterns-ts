import IAircraft from "../aerial/interfaces/IAircraft";
import ILandVehicle from "../land/interfaces/ILandVehicle";
import Airplane from "../aerial/Airplane";
import ITransportFactory from "./interfaces/ITransportFactory";
import Car from "../land/Car";

export default class UberTransport implements ITransportFactory {
  createTransportLandVehicle(): ILandVehicle {
    return new Car();
  }

  createTransportAircraft(): IAircraft {
    return new Airplane();
  }
}
