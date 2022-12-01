import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChuckComponent } from './components/chuck/chuck.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormComponent } from './components/form/form.component';
import { DevComponent } from './components/dev/dev.component';
import { ChuckService } from './services/chuck.service';
import { FormService } from './services/form.service';

@NgModule({
  declarations: [
    AppComponent,
    ChuckComponent,
    NavBarComponent,
    FormComponent,
    DevComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ChuckService, FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
