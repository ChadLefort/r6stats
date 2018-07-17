export interface IStatsResultsResponse {
  results: Results;
}

export interface IStatsGrouped {
  general: IStats;
  casual: IStats;
  ranked: IStats;
}

interface IStats {
  kills: number;
  deaths: number;
  kdRatio: number;
  won: number;
  lost: number;
  wlRatio: number;
  played: number;
  timePlayed: string;
}

interface Results {
  [id: string]: IStatsResponse;
}

interface IStatsResponse {
  'generalpvp_kills:infinite': number;
  'generalpvp_death:infinite': number;
  'generalpvp_matchwon:infinite': number;
  'generalpvp_matchlost:infinite': number;
  'generalpvp_matchplayed:infinite': number;
  'generalpvp_timeplayed:infinite': number;
  'casualpvp_kills:infinite': number;
  'casualpvp_death:infinite': number;
  'casualpvp_matchwon:infinite': number;
  'casualpvp_matchlost:infinite': number;
  'casualpvp_matchplayed:infinite': number;
  'casualpvp_timeplayed:infinite': number;
  'rankedpvp_kills:infinite': number;
  'rankedpvp_death:infinite': number;
  'rankedpvp_matchwon:infinite': number;
  'rankedpvp_matchlost:infinite': number;
  'rankedpvp_matchplayed:infinite': number;
  'rankedpvp_timeplayed:infinite': number;
}
