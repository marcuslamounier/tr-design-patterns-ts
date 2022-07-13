import Token from "../utils/Token";
import IPayPalPayment from "./IPayPalPayment";

export default class PayPal implements IPayPalPayment {
  private token: Token;

  authToken(): Token {
    return new Token();
  }
  
  paypalPay(): void {
    this.token = this.authToken();
    console.log(`TOKEN: ${this.token.getToken()}`);
    console.log('Sending payment via PayPal');
  }

  paypalReceive(): void {
    console.log('Receiving payment via PayPal');
  }
}
