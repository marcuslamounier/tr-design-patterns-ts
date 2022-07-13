import Middleware from "./Middleware"

export default class CheckPassWeakness extends Middleware {
  public check(email: string, password: string): boolean {
    if (password === '123') {
      console.log('Your password uses a sequence. Please update it!');
    }
    return this.checkNext(email, password);
  }
}
