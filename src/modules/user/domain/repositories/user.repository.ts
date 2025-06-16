import { User, UserId } from '../entity/user.entity';

export interface UserRepository {
  create(user: User): Promise<void>;
  findAll(): Promise<User[]>;
  findById(id: UserId): Promise<User | null>;
  update(user: User): Promise<void>;
  delete(id: UserId): Promise<void>;
}
