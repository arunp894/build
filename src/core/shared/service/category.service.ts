import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryModel } from '../interface/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  list(playload : any):Observable<any>{
    return this.http.post('categories/',playload)
  }

  createCategory(playload : CategoryModel):Observable<any>{    
    return this.http.post('categories/create/',playload)
  }

  editCategory(playload : CategoryModel):Observable<any>{
    return this.http.post(`categories/update/${playload.id}/`,playload)
  }

  deleteCategory(playload : CategoryModel):Observable<any>{
    return this.http.post(`categories/update/${playload.id}/`,playload)
  }
}
