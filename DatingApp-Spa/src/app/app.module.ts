import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';
import { MessagesComponent } from './messages/messages.component';
import { MemberListComponent } from './member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';

@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      NavComponent,
      RegisterComponent,
      HomeComponent,
      MessagesComponent,
      MemberListComponent,
      ListsComponent
   ],
   imports: [
      BrowserModule,
      BsDropdownModule.forRoot(),
      HttpClientModule,
      FormsModule
   ],
   providers: [
     AuthService,
     ErrorInterceptorProvider,
     AlertifyService
    ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
