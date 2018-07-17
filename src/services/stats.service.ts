import { HttpService, Injectable } from '@nestjs/common';
import { IStatsResultsResponse } from '../interfaces/stats';

@Injectable()
export class StatsService {
  constructor(private readonly httpService: HttpService) {}

  async getUserInfo(id: string) {
    return await this.httpService
      .get<IStatsResultsResponse>(
        `https://public-ubiservices.ubi.com/v1/spaces/5172a557-50b5-4665-b7db-e3f2e8c5041d/sandboxes/OSBOR_PC_LNCH_A/playerstats2/statistics`,
        {
          params: {
            populations: id,
            statistics: [
              'generalpvp_kills',
              'generalpvp_death',
              'generalpvp_matchwon',
              'generalpvp_matchlost',
              'generalpvp_matchplayed',
              'generalpvp_timeplayed',
              'casualpvp_kills',
              'casualpvp_death',
              'casualpvp_matchwon',
              'casualpvp_matchlost',
              'casualpvp_matchplayed',
              'casualpvp_timeplayed',
              'rankedpvp_kills',
              'rankedpvp_death',
              'rankedpvp_matchwon',
              'rankedpvp_matchlost',
              'rankedpvp_matchplayed',
              'rankedpvp_timeplayed'
            ].join(',')
          }
        }
      )
      .toPromise();
  }
}
