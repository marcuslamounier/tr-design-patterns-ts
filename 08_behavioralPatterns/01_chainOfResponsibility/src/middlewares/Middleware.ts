export default abstract class Middleware {
  public next: Middleware | null = null;

  public linkWith(next: Middleware): Middleware {
    this.next = next;
    return next;
  }

  public abstract check(email: string, password: string) : boolean;

  protected checkNext(email: string, password: string): boolean {
    return (this.next ? this.next.check(email, password) : true);
  }
}
