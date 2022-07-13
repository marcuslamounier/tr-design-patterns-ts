import Token from "../utils/Token";
import IMercadoPagoPayment from "./IMercadoPagoPayment";

export default class MercadoPago implements IMercadoPagoPayment {
  private token: Token;

  authToken(): Token {
    return new Token();
  }

  sendPayment(): void {
    this.token = this.authToken();
    console.log(`TOKEN: ${this.token.getToken()}`);
    console.log('Sending payment via MercadoPago');
  }

  receivePayment(): void {
    console.log('Receiving payment via MercadoPago');
  }
}
