import {Injectable} from '@angular/core';
import {ISearchQueryParams, ISearchResult, OrderEnum} from '../models/search';
import {map, mergeMap} from 'rxjs/operators';
import {Observable, combineLatest} from 'rxjs';
import {SearchService} from './search.service';
import {WeatherService} from './weather.service';
import {IDashboardResponse} from '../models/dashboard-response';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  readonly numberOfWeatherDataSets = 5;

  readonly defaultQueryParamsTileOne: ISearchQueryParams = {
    searchTerm: 'TypeScript',
    pageSize: 10,
    order: OrderEnum.DESC,
    sort: 'activity',
    site: 'stackoverflow'
  };

  readonly defaultQueryParamsTileTwo: ISearchQueryParams = {
    searchTerm: 'Angular2',
    pageSize: 10,
    order: OrderEnum.DESC,
    sort: 'activity',
    site: 'stackoverflow'
  };

  readonly defaultQueryParamsTileThree: ISearchQueryParams = {
    searchTerm: 'Weather',
    pageSize: 5,
    order: OrderEnum.DESC,
    sort: 'activity',
    site: 'stackoverflow'
  };

  constructor(private searchService: SearchService, private weatherService: WeatherService) {
  }

  loadDashboard(): Observable<IDashboardResponse> {
    const requests: Observable<ISearchResult>[] = [
      this.searchService.search(this.defaultQueryParamsTileOne),
      this.searchService.search(this.defaultQueryParamsTileTwo),
      this.searchService.search(this.defaultQueryParamsTileThree)
    ];

    return combineLatest(requests).pipe(map(this.mapSearchResults),
      mergeMap(combinedResult => {
        return this.weatherService.getRandomWeatherData(this.numberOfWeatherDataSets).pipe(
          map(weatherData => {
            return {
              dataTileOne: combinedResult.dataTileOne,
              dataTileTwo: combinedResult.dataTileTwo,
              partialDataTileThree: combinedResult.partialDataTileThree,
              partialWeatherDataTileThree: weatherData
            }
          }))
      }));
  }


  private mapSearchResults(responses: ISearchResult[]) {
    return {
      dataTileOne: responses[0],
      dataTileTwo: responses[1],
      partialDataTileThree: responses[2]
    };
  }
}
