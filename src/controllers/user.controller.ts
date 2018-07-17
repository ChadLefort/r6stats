import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param
  } from '@nestjs/common';
import { IUser } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':name')
  async findOne(@Param('name') name: string) {
    const {
      data: { profiles }
    } = await this.userService.getUserInfo(name);

    if (profiles.length) {
      const { userId, platformType, nameOnPlatform } = profiles[0];
      const user: IUser = {
        id: userId,
        platform: platformType,
        name: nameOnPlatform,
        stats: `${process.env.SERVER_ORIGIN}/v1/api/stats/${userId}`
      };

      return user;
    } else {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
  }
}
