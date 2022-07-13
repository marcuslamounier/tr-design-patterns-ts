import ILandVehicle from "./interfaces/ILandVehicle";

export default class Scooter implements ILandVehicle {
  startRoute(): void {
    this.getCargo();
    console.log('Starting route.');
  }

  getCargo(): void {
    console.log('Passenger already came up');
  }
}
