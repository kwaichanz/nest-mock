import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ThrottlerModule } from "@nestjs/throttler"

@Module({
  imports: [CatsModule, AuthModule, UsersModule, ThrottlerModule.forRoot([{
    name: 'short',
    ttl: 1000,
    limit: 3
  },
  {
    name: 'medium',
    ttl: 10000,
    limit: 10
  },
  {
    name: 'long',
    ttl: 60000,
    limit: 100
  }
  ])],
})
export class AppModule { }
