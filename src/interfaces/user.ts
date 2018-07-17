export interface IUser {
  id: string;
  platform: string;
  name: string;
  stats: string;
}

export interface IUserResponse {
  profiles: IProfile[];
}

interface IProfile {
  profileId: string;
  userId: string;
  platformType: string;
  idOnPlatform: string;
  nameOnPlatform: string;
}
