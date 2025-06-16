import { Module } from '@nestjs/common';
import { UserController } from './presenter/user.controller';
import { PrismaService } from 'src/shared/database/prisma.service';
import { PrismaModule } from 'src/shared/database/prisma.module';
import { CreateUserUseCase } from './application/use-cases/create-user/create-user.use-case';

import { FetchAllUsersUseCase } from './application/use-cases/find-all/fetch-all-user.use-case';
import { PrismaUserRepository } from './infra/prisma/user-prisma.repository';
import { FindByIdUserUseCase } from './application/use-cases/find-by-id/find-by-id-user.use-case';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [
    {
      provide: 'UserRepository',
      useClass: PrismaUserRepository,
    },

    CreateUserUseCase,
    FetchAllUsersUseCase,
    FindByIdUserUseCase,
  ],
})
export class UserModule {}
