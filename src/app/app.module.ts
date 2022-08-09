import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';

//Blog Module
import { BlogModule } from './blog/blog.module';

//Material Module
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { DomainComponent } from './components/domain/domain.component';
import { MenuDialogComponent } from './components/menu-dialog/menu-dialog.component';
import { BacktopBottonComponent } from './components/backtop-botton/backtop-botton.component';
import { ProgrammeComponent } from './components/programme/programme.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    DomainComponent,
    MenuDialogComponent,
    BacktopBottonComponent,
    ProgrammeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    BlogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
