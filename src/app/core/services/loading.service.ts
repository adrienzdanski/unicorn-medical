import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  isLoading$ = new BehaviorSubject(false);

  constructor() {}

  startLoading(): void {
    this.isLoading$.next(true);
  }

  stopLoading(): void {
    this.isLoading$.next(false);
  }
}
