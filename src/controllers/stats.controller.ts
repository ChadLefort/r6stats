import * as moment from 'moment';
import { Controller, Get, Param } from '@nestjs/common';
import { IStatsGrouped } from '../interfaces/stats';
import { StatsService } from '../services/stats.service';
import 'moment-duration-format';

@Controller('stats')
export class StatsController {
  constructor(private readonly statsService: StatsService) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const { data } = await this.statsService.getUserInfo(id);
    const results = data.results[id];
    const stats: IStatsGrouped = {
      general: {
        kills: results['generalpvp_kills:infinite'],
        deaths: results['generalpvp_death:infinite'],
        kdRatio: Math.round((results['generalpvp_kills:infinite'] / results['generalpvp_death:infinite']) * 100) / 100,
        won: results['generalpvp_matchwon:infinite'],
        lost: results['generalpvp_matchlost:infinite'],
        wlRatio: Math.round((results['generalpvp_matchwon:infinite'] / results['generalpvp_matchlost:infinite']) * 100) / 100,
        played: results['generalpvp_matchplayed:infinite'],
        timePlayed: moment.duration(results['generalpvp_timeplayed:infinite'], 'seconds').format('hh:mm')
      },
      casual: {
        kills: results['casualpvp_kills:infinite'],
        deaths: results['casualpvp_death:infinite'],
        kdRatio: Math.round((results['casualpvp_kills:infinite'] / results['casualpvp_death:infinite']) * 100) / 100,
        won: results['casualpvp_matchwon:infinite'],
        lost: results['casualpvp_matchlost:infinite'],
        wlRatio: Math.round((results['casualpvp_matchwon:infinite'] / results['casualpvp_matchlost:infinite']) * 100) / 100,
        played: results['casualpvp_matchplayed:infinite'],
        timePlayed: moment.duration(results['casualpvp_timeplayed:infinite'], 'seconds').format('hh:mm')
      },
      ranked: {
        kills: results['rankedpvp_kills:infinite'],
        deaths: results['rankedpvp_death:infinite'],
        kdRatio: Math.round((results['rankedpvp_kills:infinite'] / results['rankedpvp_death:infinite']) * 100) / 100,
        won: results['rankedpvp_matchwon:infinite'],
        lost: results['rankedpvp_matchlost:infinite'],
        wlRatio: Math.round((results['rankedpvp_matchwon:infinite'] / results['rankedpvp_matchlost:infinite']) * 100) / 100,
        played: results['rankedpvp_matchplayed:infinite'],
        timePlayed: moment.duration(results['rankedpvp_timeplayed:infinite'], 'seconds').format('hh:mm')
      }
    };

    return stats;
  }
}
