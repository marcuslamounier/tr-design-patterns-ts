import IAircraft from "../../aerial/interfaces/IAircraft";
import ILandVehicle from "../../land/interfaces/ILandVehicle";

export default interface ITransportFactory {
  createTransportLandVehicle(): ILandVehicle;
  createTransportAircraft(): IAircraft;
}
