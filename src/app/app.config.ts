import { ApplicationConfig, inject, NgZone, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Router, withHashLocation } from '@angular/router';
import { provideStore, select, Store } from '@ngxs/store';
import { withNgxsStoragePlugin } from '@ngxs/storage-plugin';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AuthState } from '../core/shared/store/state/auth.state';
import { HttpErrorResponse, HttpEvent, HttpInterceptorFn, HttpResponse, provideHttpClient, withInterceptors } from '@angular/common/http';
import { catchError, Observable, switchMap, tap, throwError } from 'rxjs';
import { ENV } from '../env';
import { Logout, RefereshToken } from '../core/shared/store/action/auth.action';
import Swal from 'sweetalert2'
import { AttributeState } from '../core/shared/store/state/attribute.state';
import { CategoryState } from '../core/shared/store/state/category.state';
import { SubcategoryState } from '../core/shared/store/state/subcategory.stste';
import { ProductState } from '../core/shared/store/state/product.state';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { provideToastr } from 'ngx-toastr';

export let retryCount = 0;
export const retryWaitMilliSeconds = 1000;

export const httpInterceptorFn: HttpInterceptorFn = (req, next):Observable<HttpEvent<any>> => { 
  const route = inject(Router)
  const store = inject(Store)
  const ngzone  = inject(NgZone);
  const auth = select(AuthState.access)  
  
  let clone = req.clone({
    url: `${ENV.url}${req.url}`,
    withCredentials : true,
    setHeaders: {
      Authorization: auth(),
    },
  })  
  if('login_api/' == req.url){
    clone = req.clone({
      url: `${ENV.url}${req.url}`,
      withCredentials : true,      
    })
  }
  
  const handleLogout = () => {
    ngzone.runOutsideAngular(() => {
      Swal.fire({
        title: "Auto close alert!",
        html: "Your Session is Out</br>Login Again!!",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          store.dispatch(new Logout());
        }
      });
    });
  };

  const handleError = (error: any) => {
    ngzone.runOutsideAngular(() => {
      Swal.fire({
        title: error.error,
        text: 'Something went wrong...!',
      });
    });
  };
  
  const handle403Error = (error:HttpErrorResponse) => {
    if (retryCount < 3) {
        retryCount++; 
        return store.dispatch(new RefereshToken()).pipe(
          switchMap((accesstoken) => {
            return next(req.clone({
              url: `${ENV.url}${req.url}`,
              withCredentials : true,
              setHeaders: {
                Authorization: auth(),
              },
            }));
          }),
          catchError(error => {
            handleError(error); 
            return throwError(() => error); 
          })
        );
    } else {
        handleLogout();
        return throwError(() => error); 
    }
};


  return next(clone).pipe(    
    catchError((error: HttpErrorResponse):Observable<HttpEvent<any>> => {      
      if (error.status === 403) {       
        return handle403Error(error); 
      }
      // handleError(error);
      return throwError(() => error);
    }),
    tap({
      next : (event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {          
          if (event.status == 200){ }          
        }
      },
      error : (error) => {
        if (error.status == 403){          
          handleLogout();          
        }else{
          // handleError(error);
        }
      }
    })
  )
};


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptors([httpInterceptorFn])),
    provideRouter(routes, withHashLocation()),
    provideAnimations(),
    provideToastr(),
    withNgxsReduxDevtoolsPlugin({
        trace : true
      }),
    provideStore([
      AuthState,
      AttributeState,
      CategoryState,
      SubcategoryState,
      ProductState
    ]), 
    withNgxsStoragePlugin({
      keys : [
        AuthState
      ]
    })
  ]
};

