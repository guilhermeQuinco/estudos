import { User, UserId } from '../entity/user.entity';

export interface UserRepository {
  create(user: User): Promise<void>;
  findAll(): Promise<User[]>;
  findById(id: UserId): Promise<User | null>;
  update(id: string, user: User): Promise<User | null>;
  delete(id: string): Promise<void>;
}
