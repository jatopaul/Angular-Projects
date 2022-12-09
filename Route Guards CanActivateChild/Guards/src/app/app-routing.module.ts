import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessGuardGuard } from './access-guard.guard';
import { AdminEditComponent } from './admin/admin-edit/admin-edit.component';
import { AdminManagerComponent } from './admin/admin-manager/admin-manager.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'user', component: UserComponent },
  {
    path: 'admin',component:AdminComponent,canActivate: [AccessGuardGuard],
    canActivateChild: [AccessGuardGuard],
    children: [
      { path: 'admin-edit', component: AdminEditComponent },
      { path: 'admin-manager', component: AdminManagerComponent },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


