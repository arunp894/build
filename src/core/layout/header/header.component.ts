import { Component, inject, signal, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { select, Store } from '@ngxs/store';
import { Logout, } from '../../shared/store/action/auth.action';
import { CommonModule } from '@angular/common';
import { AuthState } from '../../shared/store/state/auth.state';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  
  private modalService = inject(NgbModal);
  
  store = inject(Store)
  loading = signal(1)
  user = select(AuthState.user)
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loading.set(1)    
  }

  open(content: TemplateRef<any>) {
    this.modalService.open(content, { size : 'sm',centered : true })
  }

  logout(){
    this.loading.set(2)
    this.store.dispatch(new Logout())
  }
}
