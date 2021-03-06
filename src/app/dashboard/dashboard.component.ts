import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {finalize, takeUntil} from 'rxjs/operators';
import {IDashboardResponse} from '../core/models/dashboard-response';
import {DashboardService} from '../core/services/dashboard.service';
import {LoadingService} from '../core/services/loading.service';
import {ISearchResultItem} from '../core/models/search';
import {IWeather} from '../core/models/weather';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  dashboardData?: IDashboardResponse;
  combinedData: (ISearchResultItem | IWeather)[] = [];

  private notifier$ = new Subject();

  constructor(private dashboardService: DashboardService, private loadingService: LoadingService) { }

  ngOnInit() {
    this.loadingService.startLoading();
    this.dashboardService.loadDashboard().pipe(
      takeUntil(this.notifier$),
      finalize(() => {
        this.loadingService.stopLoading();
      }))
      .subscribe( data => {
      if (data) {
        this.dashboardData = data;

        this.combinedData = this.prepareTileThree(
          this.dashboardData.partialDataTileThree.items,
          this.dashboardData.partialWeatherDataTileThree
        );
      }
    },
    error => {
      console.error(error);
    });
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }

  private prepareTileThree(array1: ISearchResultItem[], array2: IWeather[]): (ISearchResultItem | IWeather)[] {
    let result = [];
    const pairs = array1.map((item, index) => {
      return [item, array2[index]];
    });
    for (const pair of pairs) {
      result = result.concat(pair);
    }
    return result;
  }
}
