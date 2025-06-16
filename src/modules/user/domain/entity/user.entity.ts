import { UrlWithStringQuery } from 'node:url';
import { Uuid } from 'src/shared/domain/value-object/uuid.vo';
import { v4 as uuid } from 'uuid';

export class UserId extends Uuid {}

export type UserCreate = {
  name: string;
  email: string;
  password: string;
};

export class User {
  constructor(
    private readonly id: UserId,
    private name: string,
    private email: string,
    private password: string,
  ) {}

  getId(): string {
    return this.id.toString();
  }

  getName(): string {
    return this.name;
  }

  getEmail(): string {
    return this.email;
  }

  getPassword(): string {
    return this.password;
  }

  static create(props: UserCreate): User {
    const user = new User(
      new UserId(uuid()),
      props.name,
      props.email,
      props.password,
    );
    return user;
  }

  update(name: string) {
    this.name = name;
  }
}
