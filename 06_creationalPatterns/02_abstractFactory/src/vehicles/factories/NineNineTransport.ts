import IAircraft from "../aerial/interfaces/IAircraft";
import ILandVehicle from "../land/interfaces/ILandVehicle";
import Motorcycle from "../land/Motorcycle";
import Helicopter from "../aerial/Helicopter";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class NineNineTransport implements ITransportFactory {
  createTransportLandVehicle(): ILandVehicle {
    return new Motorcycle();
  }

  createTransportAircraft(): IAircraft {
    return new Helicopter();
  }
}
