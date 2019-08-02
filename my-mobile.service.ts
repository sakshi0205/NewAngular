import { Injectable } from '@angular/core';
import {Mob} from './mob';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyMobileService {

  http:HttpClient;
  mobile:Mob[]=[];

  constructor(http1:HttpClient)
   {
         this.http=http1;
         this.fetchData();
   }

   fetchData()
   {
     this.http.get('./assets/mobile.json').subscribe(data=>{this.changeData(data)})
   }
   changeData(data:any)
   {
        for(let m of data)
        {
          let o=new Mob(m.MobileId,m.MobileName,m.MobilePrice);
          this.mobile.push(o);
        }
   }
   getMobileDetails():Mob[]
   {
     return this.mobile;
   }
   delete(id:number)
   {
     for(let i=0;i<this.mobile.length;i++)
     {
       let o=this.mobile[i];
       if(id==o.MobileId)
       {
         this.mobile.splice(i,1);
       }
     }
   }
}
