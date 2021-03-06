import {waitForAsync, TestBed, inject} from '@angular/core/testing';
import {of} from 'rxjs/internal/observable/of';
import {mockSO, mockWeather} from '../../tests/mock';
import {DashboardService} from './dashboard.service';
import {IDashboardResponse} from '../models/dashboard-response';
import {SearchService} from './search.service';
import {HttpClientModule} from '@angular/common/http';

describe('DashboardService', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        DashboardService,
        SearchService
      ]
    })
      .compileComponents();
  }));

  it('should load dashboard response', waitForAsync(inject([DashboardService], (service: DashboardService) => {
    expect(service).toBeTruthy();
    const response: IDashboardResponse = {
      dataTileOne: mockSO,
      dataTileTwo: mockSO,
      partialDataTileThree: mockSO,
      partialWeatherDataTileThree: mockWeather
    };
    spyOn(service, 'loadDashboard').and.returnValue(of(response));

    service.loadDashboard().subscribe( data => {
      expect(data).toEqual(response);
    });
  })));
});
