import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard } from '@nestjs/throttler';

@Module({
  controllers: [CatsController],
  providers: [CatsService, { provide: APP_GUARD, useClass: ThrottlerGuard }],
  exports: [CatsService],
})
export class CatsModule {
  constructor(private CatsService: CatsService) { }
}
