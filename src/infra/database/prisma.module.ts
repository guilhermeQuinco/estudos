import { Module } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma.service';
import { PrismaUserRepository } from 'src/modules/user/infra/repositories/user-prisma.repository';

@Module({
  providers: [PrismaService, PrismaUserRepository],
  exports: [PrismaService, PrismaUserRepository],
})
export class PrismaModule {}
