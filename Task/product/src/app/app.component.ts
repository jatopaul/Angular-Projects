import { Component } from '@angular/core';
import {UserService} from './user.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users:any;
  pro:any; //storing data
  title!:any;
  description!:any;
  price!:any;
  rating!:any;
  images!:any;
  brand!:any;
  constructor(private user:UserService){

for(let i=0;i<=4;i++){
    this.user.getData().subscribe(data=>{

      // console.warn(data);

      this.pro=data;//storing the data of all json files
      this.title=this.pro.products[i].title;
      this.description=this.pro.products[i].description;
      this.price=this.pro.products[i].price;
      this.brand=this.pro.products[i].brand;
      this.rating=this.pro.products[i].rating;
      this.images=this.pro.products[i].images[0];
    }
    )
  }

}
}
