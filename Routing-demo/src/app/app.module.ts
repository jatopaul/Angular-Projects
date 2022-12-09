import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { Aboutus2Component } from './aboutus2/aboutus2.component';
import { TestModule } from './test/test.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Aboutus3Component } from './aboutus3/aboutus3.component';
import { PipesPipe } from './pipes.pipe';
import { PreloaderComponent } from './preloader/preloader.component';
import { LoadComponent } from './load/load.component';
@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    HomeComponent,
    AboutComponent,
    PagenotfoundComponent,
    Aboutus2Component,
    Aboutus3Component,
    PipesPipe,
    PreloaderComponent,
    LoadComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestModule,
    NgbModule
  ],
  providers: [PipesPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
