import { DataBase } from "../servers/DataBase";
import Middleware from "./Middleware";

export default class CheckUserMiddleware extends Middleware {
  public check(email: string, password: string): boolean {
    if (!email.includes('@')) {
      console.log('Invalid email');
      return false;
    }
    
    if (DataBase.filter(
      item => item.email === email && item.password === password
    ).length < 1) {
      console.log('Invalid information');
      return false;
    }

    return this.checkNext(email, password);
  }
}
