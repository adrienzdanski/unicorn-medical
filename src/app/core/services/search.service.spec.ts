import {TestBed, inject, waitForAsync} from '@angular/core/testing';
import { SearchService } from './search.service';
import {HttpClientModule} from '@angular/common/http';
import {mockSO} from '../../tests/mock';
import {of} from 'rxjs/internal/observable/of';
import {ISearchResult} from '../models/search';

describe('SearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        SearchService
      ]
    });
  });

  it('should create', inject([SearchService], (service: SearchService) => {
    expect(service).toBeTruthy();
  }));

  it('should load search response', waitForAsync(inject([SearchService], (service: SearchService) => {
    expect(service).toBeTruthy();
    const response: ISearchResult = mockSO;
    spyOn(service, 'search').and.returnValue(of(response));
    service.search({searchTerm: 'test'}).subscribe( data => {
      expect(data).toEqual(response);
    });
  })));
});
