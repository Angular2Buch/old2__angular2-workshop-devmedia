import { Log } from './log';

export class Customer {
  private id: number;

  constructor(id: number) {
    this.id = id;
  }

  @Log('Debug me!')
  getId(): number {
    return this.id;
  }

  getId3() {
    return () => { return this.id; }
  }
}
