import IVehicle from "./interfaces/IVehicle";

export default class Bicycle implements IVehicle {
  startRoute(): void {
    this.getCargo();
    console.log('Starting delivery...');
  }

  getCargo(): void {
    console.log('Your food is on the route.');
  }
}
