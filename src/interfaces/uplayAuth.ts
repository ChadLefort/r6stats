export interface IUplayAuth {
  token: string;
  ticket: string;
  twoFactorAuthenticationTicket?: any;
  expiration: string;
  platformType: string;
  profileId: string;
  userId: string;
  username: string;
  nameOnPlatform: string;
  initializeUser: boolean;
  spaceId: string;
  environment: string;
  hasAcceptedLegalOptins: boolean;
  accountIssues?: any;
  sessionId: string;
  clientIp: string;
  clientIpCountry: string;
  serverTime: string;
  rememberMeTicket: string;
}
