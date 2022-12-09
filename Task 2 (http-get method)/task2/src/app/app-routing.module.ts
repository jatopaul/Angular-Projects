import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
// import { MainFirstComponent } from './main-first/main-first.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  { path: '', redirectTo: ' ', pathMatch: "full" },

    { path: 'first', component: FirstComponent },
{path:'second',component:SecondComponent},
  // { path: '**' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
