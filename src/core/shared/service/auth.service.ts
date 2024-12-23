import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthStateModel, LoginModel } from '../interface/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  
  Login(payload: LoginModel): Observable<AuthStateModel> {
    return this.http.post<AuthStateModel>(`login_api/`,payload);
  }

  RefereshToken(refresh:string) : Observable<{ access : string }>{
    return this.http.post<{ access : string }>('api/token/refresh/',{ refresh : refresh })
  }
}
