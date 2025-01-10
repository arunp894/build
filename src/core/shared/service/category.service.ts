import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryModel } from '../interface/category';
import { Category } from '../store/state/category.state';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  list(playload : any):Observable<any>{
    return this.http.post('categories/',playload)
  }

  getCategory(playload : any):Observable<{ data : Array<Category> }>{    
    return this.http.post<{ data : Array<Category> }>('categories/subcategory/list/',playload)
  }

  createCategory(playload : CategoryModel):Observable<any>{    
    return this.http.post('categories/create/',playload)
  }

  editCategory(playload : CategoryModel):Observable<any>{
    return this.http.post(`categories/update/`,playload)
  }

  deleteCategory(playload : CategoryModel):Observable<any>{
    return this.http.post(`categories/delete/`,{category_id : playload.id})
  }
}
