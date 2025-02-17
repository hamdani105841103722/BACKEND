import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';
import { PrismaService } from './Prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth.module';

@Module({
  imports: [JwtModule.register({
    global : true,
    secret : "halloworld"
  }), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}