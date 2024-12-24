import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubcategoryModel } from '../interface/subcategory';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  constructor(private http:HttpClient) { }

  list(playload : any):Observable<any>{
    return this.http.post('categories/subcategory/',playload)
  }

  getcategory():Observable<any>{
    return this.http.post('categories/list/',{})
  }

  createCategory(playload : SubcategoryModel):Observable<any>{
    return this.http.post('categories/subcategory/create/',playload)
  }
  
  editCategory(playload : SubcategoryModel):Observable<any>{
    return this.http.post(`categories/subcategory/update/${playload.id}/`,playload)
  }
  
  deleteCategory(playload : SubcategoryModel):Observable<any>{
    return this.http.post(`categories/subcategory/update/${playload.id}/`,playload)
  }
}
