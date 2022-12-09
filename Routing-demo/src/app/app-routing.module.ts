import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { Aboutus2Component } from './aboutus2/aboutus2.component';
import { Aboutus3Component } from './aboutus3/aboutus3.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoadComponent } from './load/load.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PreloaderComponent } from './preloader/preloader.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'contact-us', component: ContactUsComponent },
  {
    path: 'about',
    children: [
      { path: '', component: AboutComponent },
      {
        path: 'aboutus2',
        component: Aboutus2Component,
      },
      {
        path: 'aboutus3',
        component: Aboutus3Component,
      },
    ],
  },
  { path: 'home', component: HomeComponent },
  { path: 'preloader',
   children: [
    {path:'',component:PreloaderComponent},
    {path: 'load', component: LoadComponent},
]
 },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
