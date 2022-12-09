import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-second',
  templateUrl: './main-second.component.html',
  styleUrls: ['./main-second.component.css']
})
export class MainSecondComponent implements OnInit {
data:any;
  constructor(private http:HttpClient) { }

  get(){
    this.getData().subscribe((data)=>this.data=data)

      }
  ngOnInit(): void {

  }
  getData(){
    // return this.http.get("https://dummyjson.com/carts");
    return this.http.get("https://dummyjson.com/products");
  }
}
