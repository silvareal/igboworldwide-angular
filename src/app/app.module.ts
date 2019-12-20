import { UsernameMatchDirective } from './common/username.directive';
import { LoginComponent } from './registration/login.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPrintModule } from 'ngx-print';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { Angular4PaystackModule } from 'angular4-paystack';
import { HttpClientModule } from '@angular/common/http';
import { CertificateComponent } from './certificate/certificate.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxLoadingModule } from 'ngx-loading';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    CertificateComponent,
    UsernameMatchDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Angular4PaystackModule.forRoot('pk_test_a211b11643605eeecc1e6c10c6a0fec15b0c4a09'),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPrintModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 90000,
      preventDuplicates: true,
    }), // ToastrModule added
    NgxLoadingModule.forRoot({}),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
