import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicedetailsService {
info1:string[]=['Adam','121','Kerala']
info2:string[]=['Ravi','122','karnataka']
info3:string[]=['Gao','123','Tamil Nadu']

getinfo1():string[]{
  return this.info1;
}
getinfo2():string[]{
  return this.info2;
}
getinfo3():string[]{
  return this.info3;
}
  constructor() { }
}
