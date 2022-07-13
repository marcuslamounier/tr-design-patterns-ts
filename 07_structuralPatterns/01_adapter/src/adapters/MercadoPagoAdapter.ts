import IPayPalPayment from "../paypal/IPayPalPayment";
import Token from "../utils/Token";
import MercadoPago from "../mercadoPago/MercadoPago"

export default class MercadoPagoAdapter implements IPayPalPayment {
  constructor(private mercadoPago: MercadoPago) {
    console.log('Adapting MercadoPago for working in same Paypal env');
  }

  authToken(): Token {
    return new Token();
  }

  paypalPay(): void {
    return this.mercadoPago.sendPayment();
  }

  paypalReceive(): void {
    return this.mercadoPago.receivePayment();
  }
}
