import { PrismaService } from 'src/infra/database/prisma.service';
import { UserRepository } from '../../domain/repositories/user.repository.interface';
import { User } from '../../domain/entity/user.entity';

export class PrismaUserRepository implements UserRepository {
  create(user: User): Promise<void> {
    throw new Error('Method not implemented.');
  }
  findAll(id: string): Promise<User[] | null> {
    throw new Error('Method not implemented.');
  }
  findOne(id: string): Promise<User | null> {
    throw new Error('Method not implemented.');
  }
  update(id: string, user: User): Promise<User | null> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
