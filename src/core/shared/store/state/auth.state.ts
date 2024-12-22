import { Injectable } from "@angular/core"
import { Router } from "@angular/router"
import { Action, Selector, State, StateContext, Store } from "@ngxs/store"
import { AuthStateModel } from "../../interface/auth";
import { Login, Logout } from "../action/auth.action";
import { AuthService } from "../../service/auth.service";
import { tap } from "rxjs";

@State<AuthStateModel>({
    name: "auth",
    defaults: {
        access : '',
        refresh : '',
        message : '',
        user : null,
        loading : false,
        error : null,
    }
})
@Injectable()
export class AuthState {
    constructor(private store: Store, public router: Router,private auth : AuthService){ }

    @Selector()
    static isAuthenticated(state: AuthStateModel): Boolean {        
      return !!state.access;
    }
    @Selector()
    static loading(state: AuthStateModel):boolean {        
      return state.loading;
    }
    @Selector()
    static error(state: AuthStateModel):string | null {        
      return state.error;
    }
    @Action(Login)
    login(ctx: StateContext<AuthStateModel>, action: Login){
        ctx.patchState({
            loading : true,
            error : null
        })
        return this.auth.Login(action.payload).pipe(
            tap({
                next : result => {
                    const state = ctx.getState();
                    ctx.patchState({
                        ...state,                      
                        access : result.access,
                        refresh : result.refresh,
                        message : result.message,
                        user : result.user,
                        loading : false
                    })
                    this.router.navigateByUrl('/')
                },
                error : error => {                    
                    const state = ctx.getState();
                    ctx.patchState({
                        ...state,
                        error : 'Invalide User Name',
                        loading : false                   
                    })
                },
                complete : () => {                    
                    ctx.patchState({
                        loading : false
                    })
                }
            })
        )
    }
    @Action(Logout)
    logout(ctx: StateContext<AuthStateModel>){
        ctx.patchState({
            loading : false,
            error : null,
            access : '',
            refresh : '',
            message : '',
            user : null,            
        })
        this.router.navigateByUrl('auth')
    }
}