import { Pipe, PipeTransform } from '@angular/core';
import {Mob} from './mob'
@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(arr:any[],MobileName:string):any[] {
    if (MobileName)
    return arr.sort((a: any, b: any) => b[MobileName].localeCompare(a[MobileName]));
  else
    return arr;
}


  
  ascending(arr:any[],column:string)
  {
    arr.sort((a:any,b:any) => {
      if(a[column]>b[column])
      {
           return 1;
      }
      return -1;
    });
    return arr;
  }

 

}
