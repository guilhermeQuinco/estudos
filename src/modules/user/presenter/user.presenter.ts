import { Transform } from 'class-transformer';
import { UserOutput } from '../application/common/user-output';
import { User } from '../domain/entity/user.entity';

export class UserPresenter {
  id: string;
  name: string;
  email: string;

  constructor(output: UserOutput) {
    this.id = output.id;
    this.name = output.name.toUpperCase();
    this.email = output.email;
  }
}
