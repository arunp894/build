import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, QueryList, signal, TemplateRef, ViewChild, ViewChildren, WritableSignal } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgSelectComponent, NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormErrorMsgComponent } from '../../../core/shared/components/form-error-msg/form-error-msg.component';
import { ListComponent } from '../../../core/shared/components/list/list.component';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { select, Store } from '@ngxs/store';
import { ProductState } from '../../../core/shared/store/state/product.state';
import { GetCategpry} from '../../../core/shared/store/action/subcategory.action';
import { ProductCreate, ProductDelete, ProductEdit, ProductList } from '../../../core/shared/store/action/product.action';
import { AttributeGet } from '../../../core/shared/store/action/attribute.action';
import { AttributeState } from '../../../core/shared/store/state/attribute.state';
import { GetCategory } from '../../../core/shared/store/action/category.action';
import { concatMap, from } from 'rxjs';
import { CategoryState } from '../../../core/shared/store/state/category.state';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormErrorMsgComponent, NgxDatatableModule, ListComponent, NgSelectModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  private offcanvasService = inject(NgbOffcanvas);
  private store = inject(Store);
  private toastr = inject(ToastrService)
  rows = select(ProductState.rows)
  table = select(ProductState.table)
  pagination = select(ProductState.pagination)  
  form = select(ProductState.form)  
  category = select(CategoryState.category)  
  EditData : any = null
  AttributeList = select(AttributeState.list)


  @ViewChild('content') content !: TemplateRef<any>
  @ViewChild('productform') productform !: ElementRef<any>
  @ViewChild('image') image !: ElementRef<any>
  @ViewChildren('categorySelect') categorySelects!: QueryList<NgSelectComponent>;

  columns : WritableSignal<Array<{ name : string, prop:string,cellTemplate?:string }>> = signal([
    { name : 'Sno', prop : 'id', cellTemplate : 'sno' },
    { name : 'Image', prop : 'images', cellTemplate : 'images' },
    { name : 'Name', prop : 'name' },   
    { name : 'Category', prop : 'category', cellTemplate : 'category' },   
    { name : 'attribute', prop : 'attribute_values', cellTemplate : 'viewAttribute' },
    { name : 'Description', prop : 'description' },  
    { name : 'Action', prop : 'id', cellTemplate : 'actionTemplate'  },
  ])
  searchForm = new FormGroup({
      name : new FormControl(''),
      category : new FormControl('')
  })

  AddEditForm = new FormGroup({
    product_id : new FormControl(''),
    image : new FormControl(''),
    description : new FormControl(''),   
    name : new FormControl('',Validators.required),
    category : new FormControl('',Validators.required),
    selectattribute : new FormControl([]),
    attributes : new FormArray<FormGroup<{
      id : FormControl<string>,
      name : FormControl<string>,
      field_type : FormControl<string>,
      values : FormControl<Array<string>>,
      value : FormControl<string>
    }>>([])
  })

  constructor(){    
    this.store.dispatch(new AttributeGet())
    this.store.dispatch(new GetCategpry())    
  }

  get formattribute() {
    return this.AddEditForm.get('attributes') as FormArray;
  }
  selectedAttributelist(data:Array<number>){
    return this.AttributeList().filter(e => data.includes(e.id))
  }

  openEnd(content: TemplateRef<any>) {
    this.EditData = null
    this.AddEditForm.reset();
    this.AddEditForm.controls.attributes.clear()    
    this.offcanvasService.open(this.content, { position: 'end', backdrop : 'static', panelClass :'w-50' });
  }
  ngAfterContentInit(): void {      
    this.store.dispatch(new ProductList({pageNumber : 0}))
    this.store.dispatch(new GetCategory({index : 0}))
  }

  getcategory(event:any,index:number){    
    this.store.dispatch(new GetCategory({category : event, index : index}))
  }
  
  setPage(pageInfo : any) {
    this.store.dispatch(new ProductList(pageInfo))
  }
  edit(data : any){      
    this.EditData = data
    this.AddEditForm.reset();
    this.AddEditForm.controls.attributes.clear()
    this.store.dispatch(new GetCategory({index : 0}))
    const parent_chain = [...data.category.parent_chain]
    parent_chain.reverse()    
    const actionsToDispatch =  parent_chain.map((e:any,index:number) => {      
      return new GetCategory({category : e.id, index : index })
    })               
    from(actionsToDispatch).pipe(
      concatMap((action:any) => this.store.dispatch(action))      
    ).subscribe({
    complete: () => {      
      setTimeout(() => { 
        const categorySelectArray = this.categorySelects.toArray();
          parent_chain.forEach((element:any,index:number) => {
            categorySelectArray[index].writeValue(element.id)              
          });
          categorySelectArray[categorySelectArray.length - 1].writeValue(data.category.id)
        },2000)              
      }
    })    
    this.setParentvalue()
    this.AddEditForm.patchValue({
      product_id : data.id,
      name : data.name,    
      image : '',  
      description : data.description, 
      attributes : [] ,
      selectattribute : data.attribute_values.map((e:any)=> e.attribute.id)  
    })        
    this.attributeEdit(data.attribute_values) 
    this.offcanvasService.open(this.content, { position: 'end', backdrop : 'static', panelClass :'w-50' });
  }
  delete(event : any){ 
    this.store.dispatch(new ProductDelete(event))
  }
  setParentvalue(){
    const categorySelectArray = this.categorySelects.toArray().reverse();
    for (const e of categorySelectArray) {
      if(e.hasValue){
        this.AddEditForm.patchValue({
          category : e.selectedValues[0]
        })   
        break; 
      }
    }
  }
  getType(i:number){
    const field_type = this.AddEditForm.controls.attributes.controls[i].controls.field_type.value
    if(field_type == 'select' || 'multiselect') return field_type
    return field_type
  }
  attributeEdit(data : []){    
    data.forEach((e:any) => {
      const values = Array.isArray(e.attribute.values)?e.attribute.values:[e.attribute.values || '']
      this.formattribute.push(new FormGroup({
        'id' : new FormControl(e.attribute.id),
        'name': new FormControl(e.attribute.name),
        'field_type': new FormControl(e.attribute.field_type),
        'values': new FormControl(values),
        'value' : new FormControl(e.value, e.attribute.field_type != 'file'?Validators.required:[])
      }))      
    })    
  }
  
  onFileSelect(event: Event, input : FormControl): void {
    const file = (event.target as HTMLInputElement)?.files?.[0] as File;           
  }

  attributerender(event:number[]){    
    if(event.length == 0){
      this.formattribute.clear();
      return
    }

    const currentControls = this.formattribute.controls;
    Object.keys(currentControls).forEach(index => {
      const control = this.formattribute.at(Number(index));
      const id : number = control.get('id')?.value;
      if (!event.includes(id)) {
        this.formattribute.removeAt(Number(index));
      }
    });

    const Attributes = this.selectedAttributelist(event)
    const values_t = this.formattribute.value    
    const Pure = Attributes.filter(e => !values_t.some((s:any) => s.id == e.id))
    
    Pure.forEach((e, i) => {
      const values = Array.isArray(e.values)?e.values:[e.values || '']     
      this.formattribute.push(new FormGroup({
        'id' : new FormControl(e.id),
        'name': new FormControl(e.name),
        'field_type': new FormControl(e.field_type),
        'values': new FormControl(values),
        'value' : new FormControl('',e.field_type =='file'?[]:Validators.required)
      }))
    })   
  }
  search(){
    this.store.dispatch(new ProductList({
      search : this.searchForm.value
    }))
  }

  submit(){
    this.setParentvalue()
    if(this.AddEditForm.valid){
      const data = this.AddEditForm.value
      data.attributes = []
      Object.keys(this.formattribute.controls).forEach(index => {
        const control = this.formattribute.at(Number(index));
        data.attributes?.push({
          'id' : control.get('id')?.value,
          'value' : control.get('value')?.value
        })
      })
      const form = this.GenerateForm()
      let Action = new ProductCreate(form)
      if(this.AddEditForm.controls.product_id.value){
        Action = new ProductEdit(form)
      }
      this.store.dispatch(Action).subscribe({
        next : (value) => {
          if(this.AddEditForm.controls.product_id.value){
            this.toastr.success('Updated');                      
            this.offcanvasService.dismiss(this.content);
          }else{
            this.toastr.success('Created');           
            this.AddEditForm.reset()
            this.formattribute.clear();           
            
            this.store.dispatch(new GetCategory({index : 0}))
            const categorySelectArray = this.categorySelects.toArray();   
            categorySelectArray[0].writeValue(null)
          }
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
  GenerateForm():FormData {    
    const formData = new FormData();
    formData.append('product_id', this.AddEditForm.get('product_id')?.value || '');
    if(this.image.nativeElement.files.length) formData.append('image', this.image.nativeElement.files[0]);
    else formData.append('image', '');
    formData.append('description', this.AddEditForm.get('description')?.value || '');
    formData.append('name', this.AddEditForm.get('name')?.value || '');
    formData.append('category', this.AddEditForm.get('category')?.value || '');

    const attributes = this.AddEditForm.get('attributes') as FormArray;
      attributes.controls.forEach((attribute, index) => {
      const attributeGroup = attribute as FormGroup;
      formData.append(`attribute[${index}][id]`, attributeGroup.get('id')?.value || '');
      formData.append(`attribute[${index}][name]`, attributeGroup.get('name')?.value || '');
      formData.append(`attribute[${index}][field_type]`, attributeGroup.get('field_type')?.value || '');
      formData.append(`attribute[${index}][values]`, JSON.stringify(attributeGroup.get('values')?.value || []));
      if(attributeGroup.get('field_type')?.value == 'file'){
        const file = document.querySelector(`input[name="attributes\\[${index}\\]\\[value\\]`) as HTMLInputElement
        if(file.files?.length && file.files?.length > 0){
          formData.append(`attribute[${index}][value]`, file.files[0]);
        }else{
          if(this.EditData && this.EditData.attribute_values[index].file){
            formData.append(`attribute[${index}][value]`, this.EditData.attribute_values[index].file);
          }else{
            formData.append(`attribute[${index}][value]`, '');
          }
        }
      }else{
        formData.append(`attribute[${index}][value]`, attributeGroup.get('value')?.value || '');
      }
    });
    return formData
  }
}
