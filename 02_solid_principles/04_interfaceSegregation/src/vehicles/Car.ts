import IVehicleCar from "./IVehicleCar";

export default class Car implements IVehicleCar {
  constructor(
    color: string, year: number, engine: number, seats: number
  ) {
    this.configureCar(color, year, engine, seats);
  }

  startVehicle(): void {
    console.log('Starting engine.');
  }

  configureCar(
    color: string, year: number, engine: number, seats: number
  ): void {
    console.log(
      `Creating a car: ${color}, ${year}, ${engine} potency ` +
      `with ${seats} seats`
    );
    this.startVehicle();
  }
}