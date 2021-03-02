import {Injectable} from '@angular/core';
import {ISearchQueryParams, OrderEnum} from '../models/search';

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

  constructor() {}
}
