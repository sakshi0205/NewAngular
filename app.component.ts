import { Component, OnInit } from '@angular/core';
import {Mob} from './mob';
import {MyMobileService} from './my-mobile.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'employeecrud';
   mobile:Mob[];
   
  constructor(public cService:MyMobileService)
  {

  }
  ngOnInit()
  {
    this.mobile=this.cService.getMobileDetails();
  }
  delete(id:number)
  {
    this.cService.delete(id);
    this.mobile=this.cService.getMobileDetails();
  }

  column:string="id";
  order:boolean=true;
  sort(column:string,order:boolean)
  {
    this.column=column;
  

  if(this.column==column && order==this.order)
  {
      this.order=!order;
  }
  else{
    this.order=true;
  }
}
}
