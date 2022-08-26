import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './Home/HomeApp.component';
import { AppComponent } from './Customer/CustomerApp.component';
import { MinimalistComponent } from './Minimalist/Minimalist.component';
import { MainRoutes } from './Routing/CustomerApp.MainRouting'

@NgModule({
  declarations: [
    HomeComponent, AppComponent, MinimalistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(MainRoutes)
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
