import { UserRepository } from '../../domain/repositories/user.repository';
import { User } from '../../domain/entity/user.entity';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma.service';
import { UserModelMapper } from './user-model.mapper';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(user: User): Promise<void> {
    const data = UserModelMapper.toModel(user);
    await this.prisma.user.create({
      data,
    });
  }
  async findAll(): Promise<User[]> {
    throw new Error('Method not implemented.');
    // const usersData = await this.prisma.user.findMany({});

    // return usersData.map(UserMapper.toDomain);
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
