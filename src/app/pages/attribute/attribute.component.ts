import { Component, inject, TemplateRef } from '@angular/core';
import { DatatableService } from '../../../core/shared/lib/datatable.service';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-attribute',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './attribute.component.html',
  styleUrl: './attribute.component.scss'
})
export class AttributeComponent {

  private offcanvasService = inject(NgbOffcanvas);
  AddEditForm = new FormGroup({
      name : new FormControl('',[Validators.required]),
      field_type : new FormControl('',[Validators.required]),
      values : new FormArray([])
  })

  constructor(private table : DatatableService){}

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
   this.table.init('attributes/','#example',{
    columns: [
      { data : 'id' },
      { data : 'name' },
      { data : 'field_type' },
      { data : 'id' },
    ],
    columnDefs : [
      {
        targets: 2,
        data: null,
        orderable: true,
        render: function (data : any, type:any, row:any) {
          return  data;
        }
      }
    ]
   })    
  }
  addValueControl(): void {
    this.valueArray.push(new FormControl('', Validators.required));
  }
  removeValueControl(index:number): void {
    this.valueArray.removeAt(index);
  }
  openEnd(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'end', backdrop : 'static' });
	}

  submit(){
    
  }
}
