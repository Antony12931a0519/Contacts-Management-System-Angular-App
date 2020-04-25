import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './authentication/auth.guard';


const routes: Routes = [
  { path: '', redirectTo:'/login',pathMatch :'full' },
  { path: 'home', component: HomeComponent ,canActivate: [AuthGuard]},
  { path: 'aboutus', component: AboutusComponent,canActivate: [AuthGuard] },
  { path: 'contactus', component: ContactusComponent,canActivate: [AuthGuard] },  
  { path: 'login', component: LoginComponent },
  { path: '**', component: ErrorpageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
