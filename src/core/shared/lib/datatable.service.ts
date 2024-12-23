declare class DataTable {
  constructor(...args: any);
}
import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatatableService {
  instance : any;
  url : string = ''

  constructor(private http : HttpClient){}
  defaultSetting(options: Record<string, any>){
    return {
      ...options,
      lengthMenu: [5, 10, 25, 100],
      pageLength: 10,
      searchDelay: 500,
      processing: true,
      serverSide : false
    }
  }
  init(api:string,selecter : string,options: Record<string, any> = {}):any{
    this.url = api
    this.instance = new DataTable(selecter,this.defaultSetting(options))
    this.instance.on('page', ()=>{             
      console.log('Page changed:', this.instance?.page.info());
      this.onPageRender();
    });   
    this.triggerpageEvent() 
  }
  
  triggerpageEvent(){
    this.instance.table().node().dispatchEvent(new Event('page'));
  }

  onPageRender(){
    this.http.get(this.url).subscribe({
      next : (value:any)=>{
          this.renderData(value.results)
      },
    })
  }
  renderData(arr : Array<any>){    
    this.instance.clear();
    this.instance.rows.add(arr);
    this.instance.draw();
  }

}
