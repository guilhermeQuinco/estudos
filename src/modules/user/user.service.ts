import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUser: any) {
    return this.prisma.user.create({ data: createUser });
  }

  async findAll() {
    return this.prisma.user.findMany({});
  }

  async findOne(id: string) {
    const foundUser = this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    return foundUser;
  }

  async update(id: string, updateUser: any) {
    return this.prisma.user.update({ where: { id }, data: updateUser });
  }

  async delete(id: string) {
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
