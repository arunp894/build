import { Component, signal } from '@angular/core';
import { BreadcrumbComponent } from "../../../core/shared/components/breadcrumb/breadcrumb.component";
import { DatatableService } from '../../../core/shared/lib/datatable.service';

@Component({
  selector: 'app-dashboad',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './dashboad.component.html',
  styleUrl: './dashboad.component.scss',
})
export class DashboadComponent {

  count = signal(1)

  constructor(private table : DatatableService){}

  ngAfterContentInit(): void {   
    const instance = this.table.init('#example')
    console.log(instance)
  }
}
