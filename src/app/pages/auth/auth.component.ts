import { Component, ElementRef, inject, signal, ViewChild, viewChild } from '@angular/core';
import { BgImageDirective } from '../../../core/directive/bg-image.directive';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { FormErrorMsgComponent } from '../../../core/shared/components/form-error-msg/form-error-msg.component';
import { CommonModule } from '@angular/common';
import { flipInXOnEnterAnimation } from 'angular-animations';
import { select, Store } from '@ngxs/store';
import { Login } from '../../../core/shared/store/action/auth.action';
import { AuthState } from '../../../core/shared/store/state/auth.state';


@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [BgImageDirective, RouterModule, ReactiveFormsModule,FormErrorMsgComponent, CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  animations : [
    flipInXOnEnterAnimation()
  ]
})
export class AuthComponent {

  store = inject(Store)
  Form_loading = select(AuthState.loading)
  error = select(AuthState.error)
  ActiveForm = signal(1)
  
  @ViewChild('Remember') Remember!: ElementRef;

  LoginForm = new FormGroup({
    email : new FormControl('',[Validators.email, Validators.required]),
    password : new FormControl('',[Validators.minLength(6),Validators.required])
  })
  ForgotForm = new FormGroup({
    email : new FormControl('',[Validators.email, Validators.required]),
  })

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.LoginForm.patchValue({
      email : localStorage.getItem('Ros_Email') || '',
      password : localStorage.getItem('rememberedEmail') || ''
    })
  }

  submitLogin(){
   if(this.LoginForm.valid){
    if(this.Remember.nativeElement.value = 'no'){
      localStorage.setItem('Ros_Email', this.LoginForm.controls.email.value || '');
      localStorage.setItem('rememberedEmail', this.LoginForm.controls.password.value || '');
    }
    this.store.dispatch(new Login(this.LoginForm.value))
   }
  }
}
