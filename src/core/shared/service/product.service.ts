import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Productform } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  list(playload : any):Observable<any>{
    
    return this.http.post('products/',playload)
  }

  createproduct(playload : Productform):Observable<any>{    
    return this.http.post('products/create/',playload)
  }

  editproduct(playload : Productform):Observable<any>{
    return this.http.post(`products/update/`,playload)
  }

  deleteproduct(playload : Productform):Observable<any>{
    return this.http.post(`products/delete/`,{product_id : playload.id})
  }

  imageupload(playload : any):Observable<any>{
    return this.http.post(`products/image/add/`,playload)
  }
  
  removeupload(playload : any):Observable<any>{
    return this.http.post(`products/image/add/`,playload)
  }
}
