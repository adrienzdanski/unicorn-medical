import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {finalize, takeUntil} from 'rxjs/operators';
import {IDashboardResponse} from '../core/models/dashboard-response';
import {DashboardService} from '../core/services/dashboard.service';
import {LoadingService} from '../core/services/loading.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  dashboardData?: IDashboardResponse;

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
}
