import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {SearchService} from '../services/search.service';
import {IDashboardResponse} from '../models/dashboard-response';
import {DashboardService} from '../services/dashboard.service';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {combineLatest, of} from 'rxjs';
import {ISearchResult} from '../models/search';
import {WeatherService} from '../services/weather.service';

@Injectable({ providedIn: 'root' })
export class DashboardResolver implements Resolve<IDashboardResponse> {
  constructor(private dashboardService: DashboardService, private searchService: SearchService, private weatherService: WeatherService) {}

  resolve(): Observable<IDashboardResponse> {

    const requests: Observable<ISearchResult>[] = [
      this.searchService.search(this.dashboardService.defaultQueryParamsTileOne),
      this.searchService.search(this.dashboardService.defaultQueryParamsTileTwo),
      this.searchService.search(this.dashboardService.defaultQueryParamsTileThree)
    ];

    return combineLatest(requests).pipe(map(this.mapSearchResults),
      mergeMap(combinedResult => {
        return this.weatherService.getRandomWeatherData(this.dashboardService.numberOfWeatherDataSets).pipe(
          map(weatherData => {
          return {
            dataTileOne: combinedResult.dataTileOne,
            dataTileTwo: combinedResult.dataTileTwo,
            partialDataTileThree: combinedResult.partialDataTileThree,
            partialWeatherDataTileThree: weatherData
          }
        }))
      }),
      catchError((err) => {
        console.error(err);
        return of(null);
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
