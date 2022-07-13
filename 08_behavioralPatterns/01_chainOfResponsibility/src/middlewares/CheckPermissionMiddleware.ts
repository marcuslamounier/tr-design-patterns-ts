import { DataBase } from "../servers/DataBase";
import PermissionType from "../servers/PermissionType";
import Middleware from "./Middleware"

export default class CheckPermissionMiddleware extends Middleware {
  public check(email: string, password: string): boolean {
    const users = DataBase.filter(item => item.email === email);
    if (!users.length) {
      console.log('Not registered');
      return false;
    }

    if (users[0].permission === PermissionType.ADMIN) {
      console.log('Welcome, admin!');
      return true;
    }

    console.log('Welcome, user!');
    return this.checkNext(email, password);
  }
}
