import { Module } from '@nestjs/common';
import { PrismaService } from './infra/database/prisma.service';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [UserModule],
})
export class AppModule {}
