import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable()
export class ChangeDataService {

  get onChangedIndex$(): Observable<any> {
    return this.index.asObservable().pipe(distinctUntilChanged());
  }
  get onChangedTittle$(): Observable<any> {
    return this.tittle.asObservable().pipe(distinctUntilChanged());
  }

  private index: Subject<any>;
  private tittle: Subject<any>;

  constructor() {
    this.index = new Subject();
    this.tittle = new Subject();
  }

  onChangeIndex(category: any) {
    this.index.next(category);    
  }
  onChangeTittle(category: any) {
    this.tittle.next(category);    
  }

}