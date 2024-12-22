import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENV } from '../../../env';
import { AuthStateModel, LoginModel } from '../interface/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  
  Login(payload: LoginModel): Observable<AuthStateModel> {
    return this.http.post<AuthStateModel>(`${ENV.url}endpoints/login_api/`,payload);
  }
}
