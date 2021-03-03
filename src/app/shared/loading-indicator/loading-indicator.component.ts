import {Component} from '@angular/core';
import {LoadingService} from '../../core/services/loading.service';

@Component({
  selector: 'app-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.scss']
})
export class LoadingIndicatorComponent {
  constructor(public loadingService: LoadingService) {}
}
