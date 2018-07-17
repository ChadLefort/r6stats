import { HttpService, Injectable } from '@nestjs/common';
import { IUserResponse } from '../interfaces/user';

@Injectable()
export class UserService {
  constructor(private readonly httpService: HttpService) {}

  async getUserInfo(name: string) {
    return await this.httpService
      .get<IUserResponse>(`https://uplayoverlay.ubi.com/ubiservices/v1/profiles?platformType=uplay&nameOnPlatform=${name}`)
      .toPromise();
  }
}
