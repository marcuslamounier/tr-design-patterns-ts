import Token from "../utils/Token";

export default interface IPayPalPayment {
  authToken(): Token;
  paypalPay(): void;
  paypalReceive(): void;
}
