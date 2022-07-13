export default class Token {
  private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1WIiwiaWF0IjoxNTE2MjM5MDIyfQ.BAoofEz45earkXDrj2DwjBZLuqK3kCeuKxgTpN5rAE4';

  getToken(): string {
    return this.token;
  }
}
