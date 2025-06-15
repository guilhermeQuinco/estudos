import { User as UserPrisma } from 'generated/prisma';
import { User, UserId } from '../../domain/entity/user.entity';

export class UserModelMapper {
  static toModel(model: User): UserPrisma {
    return {
      id: model.getId(),
      name: model.getName(),
      email: model.getEmail(),
      password: model.getPassword(),
    };
  }

  static toEntity(model: UserPrisma): User {
    return new User(
      new UserId(model.id),
      model.name ?? '',
      model.email,
      model.password,
    );
  }
}
