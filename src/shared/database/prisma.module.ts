import { Module } from '@nestjs/common';

import { PrismaService } from './prisma.service';
import { PrismaUserRepository } from 'src/modules/user/infra/prisma/user-prisma.repository';

@Module({
  providers: [PrismaService, PrismaUserRepository],
  exports: [PrismaService, PrismaUserRepository],
})
export class PrismaModule {}
