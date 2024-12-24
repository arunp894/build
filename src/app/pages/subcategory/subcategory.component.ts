import { Component, inject, signal, TemplateRef, ViewChild, WritableSignal } from '@angular/core';
import Swal from 'sweetalert2';
import { GetCategpry, SubcategoryCreate, SubcategoryEdit, SubcategoryList } from '../../../core/shared/store/action/subcategory.action';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SubcategoryState } from '../../../core/shared/store/state/subcategory.stste';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { select, Store } from '@ngxs/store';
import { ListComponent } from '../../../core/shared/components/list/list.component';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormErrorMsgComponent } from '../../../core/shared/components/form-error-msg/form-error-msg.component';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-subcategory',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormErrorMsgComponent, NgxDatatableModule, ListComponent, NgSelectModule],
  templateUrl: './subcategory.component.html',
  styleUrl: './subcategory.component.scss'
})
export class SubcategoryComponent {

  
  private offcanvasService = inject(NgbOffcanvas);
  private store = inject(Store);
  rows = select(SubcategoryState.rows)
  table = select(SubcategoryState.table)
  pagination = select(SubcategoryState.pagination)  
  form = select(SubcategoryState.form)
  category = select(SubcategoryState.category)

  columns : WritableSignal<Array<{ name : string, prop:string,cellTemplate?:string }>> = signal([
    { name : '#', prop : 'id' },
    { name : 'Parent Category', prop : 'category', cellTemplate : 'category' },
    { name : 'Name', prop : 'name' },
    { name : 'Description', prop : 'description' },  
    { name : 'Action', prop : 'id', cellTemplate : 'actionTemplate'  },
  ])
  constructor(){
    this.store.dispatch(new GetCategpry())
  }
  @ViewChild('content') content !: TemplateRef<any>

  searchForm = new FormGroup({
    name : new FormControl(''),
    category : new FormControl('')
  })
  
  AddEditForm = new FormGroup({
    description : new FormControl(''),
    id : new FormControl(''),
    category : new FormControl('',Validators.required),
    name : new FormControl('',Validators.required)
  })

  ngAfterContentInit(): void {      
      this.store.dispatch(new SubcategoryList({pageNumber : 0}))
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
      category : data.category.id,
      id : data.id,
    })
		this.offcanvasService.open(this.content, { position: 'end', backdrop : 'static' });
  }
  setPage(pageInfo : any) {
      this.store.dispatch(new SubcategoryList(pageInfo))
    }
  search(){
    this.store.dispatch(new SubcategoryList({
          search : this.searchForm.value
    }))
  }
  delete(event : any){

  }
  submit(){
    if(this.AddEditForm.valid){
    let Action = new SubcategoryCreate(this.AddEditForm.value)
    if(this.AddEditForm.controls.id.value){
      Action = new SubcategoryEdit(this.AddEditForm.value)
    }
      this.store.dispatch(Action).subscribe({
        next : (value) => {
          if(this.AddEditForm.controls.id.value){
            Swal.fire({
              title: "Updated",
              icon: "success",
              draggable: true
            })
            this.store.dispatch(new SubcategoryList({}))
          }
          else{
            Swal.fire({
              title: "Created",
              icon: "success",
              draggable: true
            })
            this.AddEditForm.reset()           
            this.store.dispatch(new SubcategoryList({pageNumber : 0}))
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
