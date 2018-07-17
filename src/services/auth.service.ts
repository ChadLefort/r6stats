import { HttpService, Injectable } from '@nestjs/common';
import { IUplayAuth } from '../interfaces/uplayAuth';

@Injectable()
export class AuthService {
  constructor(private readonly httpService: HttpService) {}

  async login() {
    try {
      const resposne = await this.httpService
        .post<IUplayAuth>(
          'https://uplayconnect.ubi.com/ubiservices/v2/profiles/sessions',
          { rememberMe: true },
          {
            headers: {
              'Ubi-AppId': process.env.UBI_APPID,
              Authorization: `Basic ${new Buffer(`${process.env.UPLAY_EMAIL}:${process.env.UPLAY_PASSWORD}`, 'utf8').toString('base64')}`
            }
          }
        )
        .toPromise();

      return resposne.data;
    } catch (error) {
      console.error(error);
    }
  }
}
