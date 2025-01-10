import { CommonModule } from '@angular/common';
import { Component, inject, NgZone, NO_ERRORS_SCHEMA, QueryList, signal, TemplateRef, ViewChild, ViewChildren, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { select, Store } from '@ngxs/store';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormErrorMsgComponent } from '../../../core/shared/components/form-error-msg/form-error-msg.component';
import { ListComponent } from '../../../core/shared/components/list/list.component';
import { CategotyCreate, CategotyDelete, CategotyEdit, CategotyList, GetCategory } from '../../../core/shared/store/action/category.action';
import { CategoryState } from '../../../core/shared/store/state/category.state';
import { NgSelectComponent, NgSelectModule } from '@ng-select/ng-select';
import { concatMap, from, tap,} from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormErrorMsgComponent, NgxDatatableModule, ListComponent, NgSelectModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss', 
})
export class CategoryComponent {

  private offcanvasService = inject(NgbOffcanvas);
  private store = inject(Store);
  private toastr = inject(ToastrService)
  ngZone = inject(NgZone)

  rows = select(CategoryState.rows)
  table = select(CategoryState.table)
  pagination = select(CategoryState.pagination)  
  form = select(CategoryState.form)
  category = select(CategoryState.category)
  Categoryvalues = signal<Array<string>>([])

  @ViewChildren('categorySelect') categorySelects!: QueryList<NgSelectComponent>;

  columns : WritableSignal<Array<{ name : string, prop:string,cellTemplate?:string }>> = signal([
    { name : 'Sno', prop : 'id', cellTemplate : 'sno' },
    { name : 'Name', prop : 'name' },
    { name : 'Parent Category', prop : 'parent_chain', cellTemplate : 'parent_chain' },  
    { name : 'Description', prop : 'description' },  
    { name : 'Action', prop : 'id', cellTemplate : 'actionTemplate'  },
  ])

  @ViewChild('content') content !: TemplateRef<any>

  searchForm = new FormGroup({
    name : new FormControl('',)
  })
  
  AddEditForm = new FormGroup({
    parent : new FormControl(''),
    description : new FormControl(''),
    category_id : new FormControl(''),
    name : new FormControl('',Validators.required)
  })  

  ngAfterContentInit(): void {      
    this.store.dispatch(new CategotyList({pageNumber : 0}))
    this.store.dispatch(new GetCategory({index : 0}))
  }
  
  getcategory(event:any,index:number){    
    this.store.dispatch(new GetCategory({category : event, index : index, ignoreID : this.AddEditForm.controls.category_id.value}))
  }
  openEnd(content: TemplateRef<any>) {
    this.store.dispatch(new GetCategory({index : 0}))
    this.AddEditForm.patchValue({
      name : '',  
      description : '',
      category_id : '',
      parent : ''
    })
		this.offcanvasService.open(content, { position: 'end', backdrop : 'static' });
	}
  
  edit(data : any){    
    this.Categoryvalues.set([])  
    this.store.dispatch(new GetCategory({index : 0}))
    const parent_chain = [...data.parent_chain]    
    parent_chain.reverse()
    const actionsToDispatch =  parent_chain.map((e:any,index:number) => {    
      this.Categoryvalues().push(e.id)
      return new GetCategory({category : e.id, index : index, ignoreID : data.id })
    })   
        
    from(actionsToDispatch).pipe(
      concatMap((action:any) => this.store.dispatch(action)),         
    ).subscribe({        
      complete: () => {           
        setTimeout(() => {        
          const categorySelectArray = this.categorySelects.toArray();          
            parent_chain.forEach((element:any,index:number) => {
              categorySelectArray[index].writeValue(element.id)              
            });   
          },2000)                                                    
      }
    })
    this.AddEditForm.patchValue({
      name : data.name,  
      description : data.description,
      category_id : data.id,
      parent : data.parent
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
    this.store.dispatch(new CategotyDelete(event))   
  }
  setParentvalue(){
    const categorySelectArray = this.categorySelects.toArray().reverse();
    for (const e of categorySelectArray) {
      if(e.hasValue){
        this.AddEditForm.patchValue({
          parent : e.selectedValues[0]
        })   
        break; 
      }
    }
  }
  submit(){    
    this.setParentvalue()
    this.AddEditForm.markAsDirty()
    if(this.AddEditForm.valid){
    let Action = new CategotyCreate(this.AddEditForm.value)
    if(this.AddEditForm.controls.category_id.value){
      Action = new CategotyEdit(this.AddEditForm.value)
    }
      this.store.dispatch(Action).subscribe({
        next : (value) => {
          if(this.AddEditForm.controls.category_id.value){
            this.toastr.success('Updated');                                              
            this.offcanvasService.dismiss(this.content);
          }
          else{
            this.toastr.success('Created');           
            this.AddEditForm.reset()   
            this.store.dispatch(new GetCategory({index : 0}))       
            const categorySelectArray = this.categorySelects.toArray();   
            categorySelectArray[0].writeValue(null)     
          } 
        },
        complete : ()=>{ },
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
