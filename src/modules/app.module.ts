import { AuthModule } from './auth.module';
import { HttpModule, HttpService, Module } from '@nestjs/common';
import { StatsModule } from './stats.module';
import { UserController } from '../controllers/user.controller';
import { UserModule } from './user.module';
import { UserService } from '../services/user.service';

@Module({
  imports: [HttpModule, AuthModule, UserModule, StatsModule],
  controllers: [UserController],
  providers: [UserService]
})
export class AppModule {
  constructor(private readonly httpService: HttpService, private readonly authModule: AuthModule) {
    this.authModule.setupInterceptor();
  }
}
