import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import VehicleType from "../components/VehicleType";
import Wheel from "../components/Wheel";

export default class Vehicle {
  private _wheels: Wheel[] = [];
  private _vehicleType: VehicleType;
  private _seats: number;
  private _engine: Engine;
  private _transmission: Transmission;

  addWheel(wheel: Wheel) {
    this._wheels.push(wheel);
  }

  get wheels(): Wheel[] {
    return this._wheels;
  }

  get wheelsTotal(): number {
    return this._wheels.length;
  }

  get vehicleType(): VehicleType {
    return this._vehicleType;
  }

  set vehicleType(vehicleType) {
    this._vehicleType = vehicleType;
  }

  get seats(): number {
    return this._seats;
  }

  set seats(seats) {
    this._seats = seats;
  }

  get engine(): Engine {
    return this._engine;
  }

  set engine(engine) {
    this._engine = engine;
  }

  get transmission(): Transmission {
    return this._transmission;
  }

  set transmission(transmission) {
    this._transmission = transmission;
  }
}