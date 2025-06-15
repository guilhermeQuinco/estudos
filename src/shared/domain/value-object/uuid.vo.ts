import { randomUUID } from 'crypto';

export abstract class Uuid {
  constructor(private readonly value: string = randomUUID()) {}

  toString(): string {
    return this.value;
  }

  equals(id: Uuid) {
    return id.value === this.value;
  }
}
