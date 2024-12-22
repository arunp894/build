declare class DataTable {
  constructor(...args: any);
}
import { inject, Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatatableService {

  init(...arg:any):any{
      const instance = new DataTable(...arg)
      return instance     
  }
}
