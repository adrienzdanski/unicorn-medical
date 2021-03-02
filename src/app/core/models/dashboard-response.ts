import {ISearchResult} from './search';
import {IWeather} from './weather';

export interface IDashboardResponse {
  dataTileOne: ISearchResult;
  dataTileTwo: ISearchResult;
  partialDataTileThree: ISearchResult;
  partialWeatherDataTileThree: IWeather[]
}
