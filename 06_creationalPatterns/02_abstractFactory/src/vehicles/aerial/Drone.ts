import IAircraft from "./interfaces/IAircraft";

export default class Drone implements IAircraft {
  startRoute(): void {
    this.checkWind();
    this.getCargo();
    console.log('Starting delivery...');
  }

  getCargo(): void {
    console.log(
      'Already picked up the package.'
    );
  }
  
  checkWind(): void {
    console.log('Winds of 25 mph, southeast. Winds ok.');
  }
}
