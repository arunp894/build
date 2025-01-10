import { CommonModule } from '@angular/common';
import { Component, inject, input, output, signal, TemplateRef, ViewChild, WritableSignal } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxDatatable } from '../../interface/ngxdatatable';
import { Store } from '@ngxs/store';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgxDatatableModule,CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  @ViewChild('table') table: any;

  private store = inject(Store);
  columns = input.required<any>()
  action = input.required<any>
  Ngx_datatable = input.required<NgxDatatable>()
  pagination = input.required<Array<number>>()

  editEvent = output<any>()
  deleteEvent = output<any>()
  footerpagesetEvent = output<any>()
  onSortEvent = output<any>()

  template : WritableSignal<{ name : string, TemplateRef : TemplateRef<any> }[]> = signal([])
  
  @ViewChild('empty') empty !: TemplateRef<any>;
  @ViewChild('actionTemplate') actionTemplate !: TemplateRef<any>;
  @ViewChild('category') category !: TemplateRef<any>;
  @ViewChild('viewAttribute') viewAttribute !: TemplateRef<any>;
  @ViewChild('parent_chain') parent_chain !: TemplateRef<any>;
  @ViewChild('sno') sno !: TemplateRef<any>;
  @ViewChild('images') images !: TemplateRef<any>;
  
  ngAfterViewInit(): void {
    this.template.set([
      { 'name' : 'emptyTemp', 'TemplateRef' : this.empty },
      { 'name' : 'actionTemplate', 'TemplateRef' : this.actionTemplate },
      { 'name' : 'category', 'TemplateRef' : this.category },
      { 'name' : 'viewAttribute', 'TemplateRef' : this.viewAttribute },
      { 'name' : 'parent_chain', 'TemplateRef' : this.parent_chain },
      { 'name' : 'sno', 'TemplateRef' : this.sno },
      { 'name' : 'images', 'TemplateRef' : this.images },
    ])
  }
  TemplateRef(name:string):any{
    let template = this.template().find(e => e.name == name)
    if(!template)template = this.template().find(e => e.name == 'emptyTemp')
    if(template) return template.TemplateRef
    return ''
  }

  onSort(event : any){
    this.onSortEvent.emit({ 
      sort : event.sorts
    })
  }
  setPage(event : any){    
    console.log(event, 'setPage')
  }
  footerpageset(number : number){
    this.footerpagesetEvent.emit({
      'pageNumber':number
    })  
  }
  edit(row:any){
    this.editEvent.emit(row)
  }
  onDetailToggle(event : Event) {
    console.log('Detail Toggled', event);
  }
  toggleExpandRow(row : any) {
    console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }

  delete(row:any){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#7366FF",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteEvent.emit(row)       
      }
    });    
  }
}
