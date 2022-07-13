import IPlatform from "./IPlatform";

export default class Twitch implements IPlatform {
  constructor() {
    this.configureRMTP();
    console.log('Twitch: Broadcast started!');
  }

  configureRMTP(): void {
    this.authToken();
    console.log('Twitch: Setting broadcast');
  }

  authToken(): void {
    console.log('Twitch: Authorizing application...');
  }
}
