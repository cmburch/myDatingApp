import { AuthGuard } from './_guards/auth.guard';
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
import { MemberListComponent } from './members/member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './route';
import { UserService } from './_services/user.service';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { JwtModule } from '@auth0/angular-jwt';

export function tokenGetter() {
  return localStorage.getItem('token');
}
@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      NavComponent,
      RegisterComponent,
      HomeComponent,
      MessagesComponent,
      MemberListComponent,
      MemberCardComponent,
      ListsComponent
   ],
   imports: [
      BrowserModule,
      BsDropdownModule.forRoot(),
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot(appRoutes),
      JwtModule.forRoot({
        config: {
          tokenGetter: tokenGetter,
          whitelistedDomains: ['localhost:5000'],
          blacklistedRoutes: ['localhost:5000/api/auth']
        }
      })
   ],
   providers: [
     AuthService,
     ErrorInterceptorProvider,
     AlertifyService,
     AuthGuard,
     UserService
    ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
