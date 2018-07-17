import * as dotenv from 'dotenv';
import { AppModule } from './modules/app.module';
import { NestFactory } from '@nestjs/core';

declare const module: any;

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/v1/api');
  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();
