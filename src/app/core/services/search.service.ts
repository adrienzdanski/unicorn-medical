import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {ISearchQueryParams, ISearchResult} from '../models/search';

@Injectable()
export class SearchService {
  private static readonly apiBaseUrl = 'https://api.stackexchange.com/2.2/search';

  private static buildUrl(queryParams: ISearchQueryParams): string {
    let url = `${SearchService.apiBaseUrl}?intitle=${queryParams.searchTerm}`;

    if (queryParams.pageSize && queryParams.pageSize > 0) {
      url += `&pagesize=${queryParams.pageSize}`;
    }
    if (queryParams.order) {
      url += `&order=${queryParams.order}`;
    }
    if (queryParams.sort) {
      url += `&sort=${queryParams.sort}`;
    }
    if (queryParams.site) {
      url += `&site=${queryParams.site}`;
    }

    return url;
  }

  constructor(private http: HttpClient) {}

  search(queryParams: ISearchQueryParams): Observable<ISearchResult> {
    const url = SearchService.buildUrl(queryParams);

    return this.http.get<ISearchResult>(url).pipe(
      map((response: ISearchResult) => {
        console.log('API USAGE: ' + response.quota_remaining + ' of ' + response.quota_max + ' requests available' );
        return response;
      }),
      catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
