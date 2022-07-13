import Payoneer from "../payoneer/Payoneer";
import IPayPalPayment from "../paypal/IPayPalPayment";
import Token from "../utils/Token";

export default class PayoneerAdapter implements IPayPalPayment {
  constructor(private payoneer: Payoneer) {
    console.log('Adapting Payoneer for working in same Paypal env');
  }

  authToken(): Token {
    return new Token();
  }

  paypalPay(): void {
    return this.payoneer.sendPayment();
  }

  paypalReceive(): void {
    return this.payoneer.receivePayment();
  }
}
