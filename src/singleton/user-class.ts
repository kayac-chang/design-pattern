export default class User {
  static instance: User | undefined = undefined;

  private constructor() {}

  static getInstance() {
    if (this.instance) return this.instance;

    this.instance = new User();

    return this.instance;
  }
}
