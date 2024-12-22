import { Component, ElementRef, signal, ViewChild, viewChild } from '@angular/core';
import { SimplebarAngularModule, } from 'simplebar-angular';
import { Side_menu } from '../../shared/json/menu';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SimplebarAngularModule, RouterLink, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  options : any  = {
    autoHide : false
  }

  Side_menu = signal(Side_menu)
}
