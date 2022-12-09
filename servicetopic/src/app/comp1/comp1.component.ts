import { Component, OnInit } from '@angular/core';
import { ServicedetailsService } from '../servicedetails.service';
@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
  providers: [ServicedetailsService],
})
export class Comp1Component implements OnInit {
  getinform1: string[] = [];
  getinform2: string[] = [];
  getinform3: string[] = [];

  getinfofromservice1() {
    this.getinform1 = this.rservice.getinfo1(); //here the value is a string then it goes to the getinfo1:string[]=[] because we have mltiplevalues and so neeed tosave in array
  }
  getinfofromservice2() {
    this.getinform2 = this.rservice.getinfo2();
  }
  getinfofromservice3() {
    this.getinform3 = this.rservice.getinfo3();
  }
  constructor(private rservice: ServicedetailsService) {}

  ngOnInit(): void {}
}
