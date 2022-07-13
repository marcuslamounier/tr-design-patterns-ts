import IAircraft from "./interfaces/IAircraft";

export default class Helicopter implements IAircraft {
  startRoute(): void {
    this.checkWind();
    this.getCargo();
    console.log('Starting take-off...');
  }

  getCargo(): void {
    console.log(
      'Passengers already entered the aircraft. Ready for take-off'
    );
  }
  
  checkWind(): void {
    console.log('Winds of 25 mph, southeast. Winds ok.');
  }
}
