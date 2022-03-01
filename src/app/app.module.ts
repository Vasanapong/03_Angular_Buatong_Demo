import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HeaderComponent } from './component/header/header.component';
import { DishesComponent } from './component/dishes/dishes.component';
import { ViewMenuComponent } from './component/view-menu/view-menu.component';
import { ContactComponent } from './component/contact/contact.component';
import { ShowMenuComponent } from './component/show-menu/show-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    DishesComponent,
    ViewMenuComponent,
    ContactComponent,
    ShowMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
