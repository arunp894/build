import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AttributeCreateModel } from '../interface/attribute';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttributeService {

  constructor(private http : HttpClient) { }

  list(playload : any):Observable<any>{
    return this.http.post('attributes/',playload)
  }

  createAtribute(payload : AttributeCreateModel):Observable<{ id : number}> {
    return this.http.post<{ id : number}>('attributes/create/',payload)
  }

  attributeedit(payload : AttributeCreateModel):Observable<{ id : number}> {
    return this.http.post<{ id : number}>('attributes/update/',payload)
  }

  attributedelete(payload : AttributeCreateModel):Observable<{ id : number}> {
    return this.http.post<{ id : number}>('attributes/delete/',{ attribute_id : payload })
  }

  attributeget():Observable<any> {
    return this.http.post<any>('attributes/list/',{})
  }

}
