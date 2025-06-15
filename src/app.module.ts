import { Module } from '@nestjs/common';
import { PrismaService } from './shared/database/prisma.service';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [UserModule],
})
export class AppModule {}
