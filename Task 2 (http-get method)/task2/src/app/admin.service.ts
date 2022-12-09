import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) {

  }
  getData(){
    // return this.http.get("https://dummyjson.com/carts");
    return this.http.get("https://dummyjson.com/users");
  }
}
