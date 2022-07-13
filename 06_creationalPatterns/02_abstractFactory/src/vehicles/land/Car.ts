import ILandVehicle from "./interfaces/ILandVehicle";

export default class Car implements ILandVehicle {
  startRoute(): void {
    this.getCargo();
    console.log('Starting route');
  }

  getCargo(): void {
    console.log('Already picked up the passengers. We are ready');
  }
}
