import { Transform } from 'class-transformer';
import { UserOutput } from '../application/common/user-output';

export class UserPresenter {
  id: string;
  @Transform(({ value }: { value: string }) => value.toUpperCase())
  name: string;
  email: string;

  constructor(output: UserOutput) {
    this.id = output.id;
    this.name = output.name;
    this.email = output.email;
  }
}
