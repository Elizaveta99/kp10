import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';*/

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import {UserService} from './services/user.service';
import {DataService} from './services/data.service';
import {AuthenticationService} from './services/authentication.service';
import { AlertComponent } from './alert/alert.component';
import {AuthGuard} from './guards/auth.guard';
import {AlertService} from './services/alert.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
   /* BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule*/
  ],
  providers: [AuthGuard,
              AlertService,
              UserService,
              AuthenticationService,
              DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
