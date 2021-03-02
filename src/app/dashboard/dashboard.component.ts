import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {IDashboardResponse} from '../core/models/dashboard-response';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  dashboardData?: IDashboardResponse;

  private notifier$ = new Subject();

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.pipe(takeUntil(this.notifier$)).subscribe( data => {
      if (data && data.initialDashboardData) {
        this.dashboardData = data.initialDashboardData as IDashboardResponse;
      }
    });
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }
}
