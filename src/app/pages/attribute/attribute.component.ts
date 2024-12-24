import { Component, inject, signal, TemplateRef, ViewChild, WritableSignal } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { select, Store } from '@ngxs/store';
import { AttributeCreate, AttributeEdit, AttributeList } from '../../../core/shared/store/action/attribute.action';
import { FormErrorMsgComponent } from "../../../core/shared/components/form-error-msg/form-error-msg.component";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AttributeState } from '../../../core/shared/store/state/attribute.state';
import { Page } from '../../../core/shared/interface/page';
import { ListComponent } from "../../../core/shared/components/list/list.component";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-attribute',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormErrorMsgComponent, NgxDatatableModule, ListComponent],
  templateUrl: './attribute.component.html',
  styleUrl: './attribute.component.scss'
})

export class AttributeComponent {
  page = new Page();
  private offcanvasService = inject(NgbOffcanvas);
  private store = inject(Store);
  rows = select(AttributeState.rows)
  table = select(AttributeState.table)
  pagination = select(AttributeState.pagination)
  
  form = select(AttributeState.form)

  @ViewChild('content') content !: TemplateRef<any>

  AddEditForm = new FormGroup({
      name : new FormControl('',[Validators.required]),
      id : new FormControl(''),
      field_type : new FormControl('',[Validators.required]),
      values : new FormArray([])
  })
  searchForm = new FormGroup({
    field_type : new FormControl(''),
    name : new FormControl(''),
  })
  columns : WritableSignal<Array<{ name : string, prop:string,cellTemplate?:string }>> = signal([
    { name : '#', prop : 'id' },
    { name : 'Name', prop : 'name' },
    { name : 'Field Type', prop : 'field_type' },
    { name : 'Values', prop : 'values' },
    { name : 'Action', prop : 'id', cellTemplate : 'actionTemplate'  },
  ])
  
  constructor(){}

  get enable() {
    return this.AddEditForm.controls.field_type.value == 'multiselect' || this.AddEditForm.controls.field_type.value == 'select'
  }
  get valueArray(): FormArray {
    return this.AddEditForm.get('values') as FormArray;
  }
  onChange(event : Event){
    const select = event.currentTarget as HTMLSelectElement
    if(select.value == 'multiselect' || select.value == 'select'){
      this.addValueControl()
    }else{
      this.valueArray.clear()
    }
  }
  ngAfterContentInit(): void {      
    this.store.dispatch(new AttributeList(this.page))
  }
  addValueControl(): void {
    this.valueArray.push(new FormControl('', Validators.required));
  }
  removeValueControl(index:number): void {
    this.valueArray.removeAt(index);
  }
  openEnd(content: TemplateRef<any>) {
    this.AddEditForm.patchValue({
      name : '',
      id : '',
      field_type : '',   
      values : []
    })
		this.offcanvasService.open(content, { position: 'end', backdrop : 'static' });
	}
  edit(data : any){    
    const parsedValues = data.values ?JSON.parse(data.values.replace(/'/g, '"')):[]
    parsedValues.forEach((value: string) => { 
      this.valueArray.push(new FormControl(value, Validators.required));
    });
    this.AddEditForm.patchValue({
      name : data.name,
      id : data.id,
      field_type : data.field_type,     
    })
    this.offcanvasService.open(this.content, { position: 'end', backdrop : 'static' });
  }
  delete(data : any){
    
  }

  submit(){
    if(this.AddEditForm.valid){
    let Action = new AttributeCreate(this.AddEditForm.value)
    if(this.AddEditForm.controls.id.value){
      Action = new AttributeEdit(this.AddEditForm.value)
    }
      this.store.dispatch(Action).subscribe({
        next : (value) => {
          if(this.AddEditForm.controls.id.value){            
            Swal.fire({
              title: "Updated",
              icon: "success",
              draggable: true
            })
          }else{
            this.AddEditForm.reset()
            this.page.pageNumber = 0;
          }
          this.store.dispatch(new AttributeList(this.page))
          Swal.fire({
            title: "Created",
            icon: "success",
            draggable: true
          }) 
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

  setPage(pageInfo : any) {
    this.store.dispatch(new AttributeList(pageInfo))
  }
  search(){
    this.store.dispatch(new AttributeList({
      search : this.searchForm.value
    }))
  }
}
