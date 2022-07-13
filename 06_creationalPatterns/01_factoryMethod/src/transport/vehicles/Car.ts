import IVehicle from "./interfaces/IVehicle";

export default class Car implements IVehicle {
  startRoute(): void {
    this.getCargo();
    console.log('Starting route...');
  }
  getCargo(): void {
    console.log('Picked up the riders, we are ready.');
  }
}
