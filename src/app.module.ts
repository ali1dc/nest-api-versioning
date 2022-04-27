import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { HealthModule } from './health/health.module';

@Module({
  imports: [UserModule, HealthModule],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {}
