import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObsService {

  constructor() { }

  sampleObservable(): Observable<number> {
    return Observable.create(sub  => {
      for (let i = 0; i < 100; i++) {
        sub.next(i)
      }
      sub.complete()
    })
  }
}
