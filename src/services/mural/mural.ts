import { mock } from './mock-mural';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import Mural from '../../model/mural';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the MuralProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
export default class MuralProvider {
  private lista: Mural[]
  constructor() {
  }

  public getAll(): Observable<Mural[]> {

    let ob = Observable.create(
      (sub) => sub.next(mock)
    );
    return ob;
  }

}