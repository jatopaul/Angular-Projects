import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AdminComponent } from './admin/admin.component';

@Injectable({
  providedIn: 'root',
})
export class UnsavedGuard implements CanDeactivate<AdminComponent> {
  canDeactivate(component: AdminComponent) {
    if(component.isDirty){
      return window.confirm("Are you sure do want to switch to other component")
      return true;
    }
    return true;
  }
}
