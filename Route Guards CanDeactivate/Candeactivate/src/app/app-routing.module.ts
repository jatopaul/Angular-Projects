import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { AdminComponent } from './admin/admin.component';
import { UnsavedGuard } from './unsaved.guard';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  // { path: '', redirectTo: '/', pathMatch: "full" },
{path:'admin',component:AdminComponent,
canDeactivate:[UnsavedGuard]},
{path:'user',component:UserComponent,canDeactivate:[UnsavedGuard]},
{path:'admin-details',component:AdminDetailsComponent,canDeactivate:[UnsavedGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
