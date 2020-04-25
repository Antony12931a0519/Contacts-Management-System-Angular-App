import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoginComponent } from './login/login.component';
import {  HTTP_INTERCEPTORS } from '@angular/common/http';
import {ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './authentication/auth.guard';
import { BasicAuthHttpInterceptorService } from './authentication/basic-auth-http-interceptor.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutusComponent,
    ContactusComponent,
    ErrorpageComponent,
    LoginComponent,
   
  ],
  imports: [
    BrowserModule,AppRoutingModule,HttpClientModule,FormsModule,Ng2SearchPipeModule,ReactiveFormsModule,NgxPaginationModule,
     BrowserAnimationsModule, ToastrModule.forRoot({
      timeOut:2000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    })
     
  ],
  providers: [AuthGuard,
    {  
      provide:HTTP_INTERCEPTORS, useClass:BasicAuthHttpInterceptorService, multi:true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
