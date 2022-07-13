import IPlatform from "./IPlatform";

export default class FacebookTv implements IPlatform {
  constructor() {
    this.configureRMTP();
    console.log('FacebookTv: Broadcast started!');
  }

  configureRMTP(): void {
    this.authToken();
    console.log('FacebookTv: Setting broadcast');
  }

  authToken(): void {
    console.log('FacebookTv: Authorizing application...');
  }
}
