import IPaymentInstrument from "./IPaymentInstrument";

export default class NubankRewards implements IPaymentInstrument {
  validate(): void {
    console.log(`Verifying points at Rewards Program`);
  }
  collectPayment(): void {
    console.log(`Paid with Rewards`);
  }
}