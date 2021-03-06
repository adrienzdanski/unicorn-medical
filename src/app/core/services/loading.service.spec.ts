import {waitForAsync, TestBed, inject} from '@angular/core/testing';
import {LoadingService} from './loading.service';

describe('DashboardComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [
        LoadingService
      ]
    }).compileComponents();
  }));

  it('should toggle loading', waitForAsync(inject([LoadingService], (service: LoadingService) => {
    expect(service).toBeTruthy();
    service.startLoading();
    expect(service.isLoading$.value).toEqual(true);
    service.stopLoading();
    expect(service.isLoading$.value).toEqual(false);
  })));
});
