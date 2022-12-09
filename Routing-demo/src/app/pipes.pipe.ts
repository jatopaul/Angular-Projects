import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipes',
})
export class PipesPipe implements PipeTransform {


  // transform(keys: any,values:any): any
  //  {
  //   let result= keys + '=>' + keys + '(' + values + ')';
  //   return result;

  // }
  transform(value:any): any
  {

   // if(value=='10'){
   //   return value;
   // }else{
   //   return 'null';
   // }
return value;
 }

}

