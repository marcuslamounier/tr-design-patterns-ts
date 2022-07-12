import IVehicleMotorcycle from "./IvehicleMotorcycle";

export default class Motorcycle implements IVehicleMotorcycle {
  constructor(color: string, year: number, engine: number) {
    this.configureMotorcycle(color, year, engine);
  }

  startVehicle(): void {
    console.log('Starting engine.');
  }

  configureMotorcycle(
    color: string, year: number, engine: number
  ): void {
    console.log(
      `Creating a motorcycle: ${color}, ${year}, ${engine} potency.`
    );
    this.startVehicle();
  }
}