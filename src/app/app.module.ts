import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ImprintComponent } from './imprint/imprint.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { StartpageComponent } from './startpage/startpage.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ImprintComponent,
    DataProtectionComponent,
    MainpageComponent,
    StartpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
