import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/aboutUs/aboutUs.component';
import { ServicesComponent } from './components/services/services.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactUsComponent } from './components/contactUs/contactUs.component';

import { SharedModule } from './components/shared/shared.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular material
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ServicesComponent,
    FaqComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    MatToolbarModule,
    SharedModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
