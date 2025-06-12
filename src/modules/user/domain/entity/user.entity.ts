import { v4 as uuid } from 'uuid';

export class User {
  constructor(
    private readonly id: string,
    private name: string,
    private email: string,
  ) {}

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getEmail(): string {
    return this.email;
  }

  static create(props: { name: string; email: string }): User {
    return new User(uuid(), props.name, props.email);
  }
}
