import { Module } from '@nestjs/common';
import { UserController } from './interfaces/http/user.controller';
import { PrismaService } from 'src/infra/database/prisma.service';
import { UserService } from './user.service';
import { PrismaModule } from 'src/infra/database/prisma.module';
import { CreateUserUseCase } from './application/use-cases/create-user';
import { PrismaUserRepository } from './infra/repositories/user-prisma.repository';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [
    PrismaUserRepository,
    {
      provide: CreateUserUseCase,
      useFactory: (repo: PrismaUserRepository) => new CreateUserUseCase(repo),
      inject: [PrismaUserRepository],
    },
  ],
})
export class UserModule {}
