import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-error-msg',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-error-msg.component.html',
  styleUrl: './form-error-msg.component.scss',  
})
export class FormErrorMsgComponent {
  @Input({required:true})  errors !: any;
  @Input({required:true}) touched !: boolean | undefined

  get ErrorLength(){
    return Object.keys(this.errors).length
  }
}
