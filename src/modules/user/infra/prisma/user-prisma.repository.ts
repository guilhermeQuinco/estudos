import { UserRepository } from '../../domain/repositories/user.repository';
import { User, UserId } from '../../domain/entity/user.entity';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma.service';
import { UserModelMapper } from './user-model.mapper';
import {
  UserOutput,
  UserOutputMapper,
} from '../../application/common/user-output';

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
    const usersData = await this.prisma.user.findMany({});

    return usersData.map(UserModelMapper.toEntity);
  }
  async findById(id: UserId): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { id: id.toString() },
    });

    if (!user) return null;

    return UserModelMapper.toEntity(user);
  }
  async update(user: User): Promise<void> {
    const existingUser = await this.prisma.user.findUnique({
      where: { id: user.getId() },
    });

    if (!existingUser) {
      throw new Error(`User with ID: ${user.getId()} is not found`);
    }

    await this.prisma.user.update({
      where: {
        id: user.getId(),
      },
      data: UserModelMapper.toModel(user),
    });
  }
  async delete(id: UserId): Promise<void> {
    await this.prisma.user.delete({
      where: {
        id: id.toString(),
      },
    });
  }
}
