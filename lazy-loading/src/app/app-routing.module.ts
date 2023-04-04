import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', redirectTo: '/admin', pathMatch: "full" },
{path:"admin",loadChildren:()=>import('./admin/admin.module')
.then(mod=>mod.AdminModule)
},
{path:"user",loadChildren:()=>import('./user/user.module')
.then(mod=>mod.UserModule)
},
{path:'**',component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
