import { AuthService } from '../services/auth.service';
import { AxiosRequestConfig } from 'axios';
import {
  Global,
  HttpModule,
  HttpService,
  Module
  } from '@nestjs/common';
import { IUplayAuth } from '../interfaces/uplayAuth';

@Global()
@Module({
  imports: [HttpModule],
  providers: [AuthService],
  exports: [AuthModule, AuthService]
})
export class AuthModule {
  user?: IUplayAuth;

  constructor(private readonly httpService: HttpService, private readonly authService: AuthService) {}

  async setupInterceptor() {
    const user = await this.authService.login();
    const { UBI_APPID } = process.env;

    if (user) {
      this.user = user;
      this.httpService.axiosRef.interceptors.request.use(
        (config: AxiosRequestConfig) => {
          config.headers.common = {
            'Ubi-AppId': UBI_APPID,
            Authorization: `Ubi_v1 t=${user.ticket}`
          };

          return config;
        },
        (error: Error) => console.error(error)
      );
    }
  }
}
