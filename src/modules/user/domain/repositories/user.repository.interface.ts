import { User } from '../entity/user.entity';

export interface UserRepository {
  create(user: User): Promise<void>;
  findAll(): Promise<User[] | null>;
  findOne(id: string): Promise<User | null>;
  update(id: string, user: User): Promise<User | null>;
  delete(id: string): Promise<void>;
}
