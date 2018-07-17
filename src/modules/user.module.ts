import {
  HttpModule,
  MiddlewareConsumer,
  Module,
  NestModule
  } from '@nestjs/common';
import { TokenMiddleware } from '../middleware/token.middleware';
import { UserController } from '../controllers/user.controller';
import { UserService } from '../services/user.service';

@Module({
  imports: [HttpModule],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TokenMiddleware).forRoutes(UserController);
  }
}
