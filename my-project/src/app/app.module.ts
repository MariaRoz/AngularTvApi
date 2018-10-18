import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RegisterComponent} from './register/register.component';
import {UserService} from './_services/user.service';
import {routing} from './app.routing';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {TableService} from './_services/table.service';
import {AuthGuard} from './_guard/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule, MatSortModule, MatTableModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {TableComponent} from './home/table/table.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    TableComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    routing,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [
    AuthGuard,
    UserService,
    TableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
