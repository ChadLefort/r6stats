import * as moment from 'moment';
import { AuthModule } from '../modules/auth.module';
import {
  HttpException,
  HttpStatus,
  Injectable,
  MiddlewareFunction,
  NestMiddleware
  } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class TokenMiddleware implements NestMiddleware {
  constructor(private readonly authModule: AuthModule) {}

  async resolve(): Promise<MiddlewareFunction> {
    return async (req: Request, res: Response, next: NextFunction) => {
      const { user } = this.authModule;

      if (user) {
        const { expiration } = user;

        if (moment().isSameOrAfter(expiration)) {
          await this.authModule.setupInterceptor();
        }

        next();
      } else {
        throw new HttpException('Uplay authorization token expired', HttpStatus.INTERNAL_SERVER_ERROR);
      }
    };
  }
}
