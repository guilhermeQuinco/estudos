import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { PrismaService } from 'src/infra/database/prisma.service';
import { UserService } from './user.service';
import { PrismaModule } from 'src/infra/database/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
