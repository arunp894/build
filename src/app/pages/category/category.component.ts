import { CommonModule } from '@angular/common';
import { Component, inject, signal, TemplateRef, ViewChild, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { select, Store } from '@ngxs/store';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormErrorMsgComponent } from '../../../core/shared/components/form-error-msg/form-error-msg.component';
import { ListComponent } from '../../../core/shared/components/list/list.component';
import { CategotyCreate, CategotyEdit, CategotyList } from '../../../core/shared/store/action/category.action';
import { CategoryState } from '../../../core/shared/store/state/category.state';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormErrorMsgComponent, NgxDatatableModule, ListComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {

  private offcanvasService = inject(NgbOffcanvas);
  private store = inject(Store);
  rows = select(CategoryState.rows)
  table = select(CategoryState.table)
  pagination = select(CategoryState.pagination)  
  form = select(CategoryState.form)

    columns : WritableSignal<Array<{ name : string, prop:string,cellTemplate?:string }>> = signal([
      { name : '#', prop : 'id' },
      { name : 'Name', prop : 'name' },
      { name : 'Description', prop : 'description' },  
      { name : 'Action', prop : 'id', cellTemplate : 'actionTemplate'  },
    ])

  @ViewChild('content') content !: TemplateRef<any>

  searchForm = new FormGroup({
    name : new FormControl('',)
  })
  
  AddEditForm = new FormGroup({
    description : new FormControl(''),
    id : new FormControl(''),
    name : new FormControl('',Validators.required)
  })

  ngAfterContentInit(): void {      
      this.store.dispatch(new CategotyList({pageNumber : 0}))
    }

  openEnd(content: TemplateRef<any>) {
    this.AddEditForm.patchValue({
      name : '',  
      description : ''  
    })
		this.offcanvasService.open(content, { position: 'end', backdrop : 'static' });
	}
  edit(data : any){ 
    this.AddEditForm.patchValue({
      name : data.name,  
      description : data.description,
      id : data.id,
    })
		this.offcanvasService.open(this.content, { position: 'end', backdrop : 'static' });
  }
  setPage(pageInfo : any) {
      this.store.dispatch(new CategotyList(pageInfo))
    }
  search(){
    this.store.dispatch(new CategotyList({
          search : this.searchForm.value
    }))
  }
  delete(event : any){

  }
  submit(){
    if(this.AddEditForm.valid){
    let Action = new CategotyCreate(this.AddEditForm.value)
    if(this.AddEditForm.controls.id.value){
      Action = new CategotyEdit(this.AddEditForm.value)
    }
      this.store.dispatch(Action).subscribe({
        next : (value) => {
          if(this.AddEditForm.controls.id.value){
            Swal.fire({
              title: "Updated",
              icon: "success",
              draggable: true
            })
            this.store.dispatch(new CategotyList({}))
          }
          else{
            Swal.fire({
              title: "Created",
              icon: "success",
              draggable: true
            })
            this.AddEditForm.reset()           
            this.store.dispatch(new CategotyList({pageNumber : 0}))
          } 
        },
        complete : ()=>{
          

        },
        error : err => {          
          Object.keys(err.error.errors).forEach((key) => {
            const control = this.AddEditForm.get(key);
            if (control) { 
              control.setErrors({ serverError: err.error.errors[key].toString(' ,') });
            }
          })
        }
      })
    }
  }

}
