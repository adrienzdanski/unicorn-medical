import {Component, Input} from '@angular/core';
import {ISearchResultItem} from '../../core/models/search';
import {IWeather} from '../../core/models/weather';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss']
})
export class DashboardListComponent {
  @Input() items: (ISearchResultItem | IWeather)[] = [];

  constructor() {}

  onClick(event: MouseEvent, link: string): void {
    event.stopPropagation();
    window.open(link);
  }
}
