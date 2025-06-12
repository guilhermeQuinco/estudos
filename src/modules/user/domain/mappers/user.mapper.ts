import { User } from '../entity/user.entity';

interface RawUserMap {
  id: string;
  name: string;
  email: string;
}

export class UserMapper {
  static toDomain(raw: RawUserMap) {
    return new User(raw.id, raw.name, raw.email);
  }

  static toPersistence(user: User): any {
    return {
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
    };
  }
}
