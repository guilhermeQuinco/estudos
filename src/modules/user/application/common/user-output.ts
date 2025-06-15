import { User } from '../../domain/entity/user.entity';

export type UserOutput = {
  id: string;
  name: string;
  email: string;
};

export class UserOutputMapper {
  static toOutput(entity: User): UserOutput {
    return {
      id: entity.getId(),
      name: entity.getName(),
      email: entity.getEmail(),
    };
  }
}
