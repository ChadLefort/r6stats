import {
  HttpModule,
  MiddlewareConsumer,
  Module,
  NestModule
  } from '@nestjs/common';
import { StatsController } from '../controllers/stats.controller';
import { StatsService } from '../services/stats.service';
import { TokenMiddleware } from '../middleware/token.middleware';

@Module({
  imports: [HttpModule],
  controllers: [StatsController],
  providers: [StatsService]
})
export class StatsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TokenMiddleware).forRoutes(StatsController);
  }
}
