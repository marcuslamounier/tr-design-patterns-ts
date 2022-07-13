import IAircraft from "./interfaces/IAircraft";

export default class Airplane implements IAircraft {
  startRoute(): void {
    this.checkWind();
    this.getCargo();
    console.log('Starting take-off');
  }
  
  getCargo(): void {
    console.log(
      'Passengers already entered the plane. Ready for take-off'
    );
  }

  checkWind(): void {
    console.log('Winds of 35 mph. Winds ok.');
  }
}
