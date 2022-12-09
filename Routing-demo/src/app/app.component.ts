import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-demo';
  text='this the seccond one';
  timee=Date();
  

  // obj:any = {
  //   'Brokers': 10,
  //   'Insurers': 20,
  //   'Note Types': 40,
  //   'Payees':37,
  //   'Vendors':89,
  // };

  // keys:any=Object.keys(this.obj);
  // values:any=Object.values(this.obj);

  obj:any[] =
  [
    {Name:'Brokers',id:10},
    {Name:'Insurers', id:20},
    {Name:'Note Types',id: 40},
    {Name:'Payees',id:37},
    {Name:'Vendors',id:89},
  ];


  cap(item:string){   //only we can use the one return value in a single method
    return item.toUpperCase();
  }
  cap2(item:any){
    return item.toLowerCase();
  }

}
