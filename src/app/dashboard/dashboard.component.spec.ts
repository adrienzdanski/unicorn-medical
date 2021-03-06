import {waitForAsync, ComponentFixture, TestBed, inject} from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import {ISearchResultItem} from '../core/models/search';
import {LoadingService} from '../core/services/loading.service';
import {SearchService} from '../core/services/search.service';
import {DashboardService} from '../core/services/dashboard.service';
import {HttpClientModule} from '@angular/common/http';
import {IDashboardResponse} from '../core/models/dashboard-response';
import {of} from 'rxjs/internal/observable/of';
import {IWeather} from '../core/models/weather';
import {mockCombinedData, mockSO, mockWeather} from '../tests/mock';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [DashboardComponent],
      providers: [
        DashboardService,
        SearchService,
        LoadingService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load dashboard', waitForAsync(inject([DashboardService], (service: DashboardService) => {
    expect(service).toBeTruthy();
    const response: IDashboardResponse = {
      dataTileOne: mockSO,
      dataTileTwo: mockSO,
      partialDataTileThree: mockSO,
      partialWeatherDataTileThree: mockWeather
    };
    const combinedData: (ISearchResultItem | IWeather)[] = mockCombinedData;
    spyOn(service, 'loadDashboard').and.returnValue(of(response));
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.dashboardData).toEqual(response);
    expect(component.combinedData).toEqual(combinedData);
  })));

});
