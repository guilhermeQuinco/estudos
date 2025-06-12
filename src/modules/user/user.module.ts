import { Module } from '@nestjs/common';
import { UserController } from './interfaces/http/user.controller';
import { PrismaService } from 'src/infra/database/prisma.service';
import { UserService } from './user.service';
import { PrismaModule } from 'src/infra/database/prisma.module';
import { CreateUserUseCase } from './application/use-cases/create-user';
import { PrismaUserRepository } from './infra/repositories/user-prisma.repository';
import { FetchAllUsersUseCase } from './application/use-cases/fetch-all-user';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [
    {
      provide: 'UserRepository',
      useClass: PrismaUserRepository,
    },

    {
      provide: CreateUserUseCase,
      useFactory: (repo: PrismaUserRepository) => new CreateUserUseCase(repo),
      inject: ['UserRepository'],
    },
    {
      provide: FetchAllUsersUseCase,
      useFactory: (repo: PrismaUserRepository) =>
        new FetchAllUsersUseCase(repo),
      inject: ['UserRepository'],
    },
  ],
})
export class UserModule {}
