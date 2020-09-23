import { LoginComponent } from './registration/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { CertificateComponent } from './certificate/certificate.component';
import { AuthGuardService } from './guards/auth-guard.service';


const routes: Routes = [
  { path: 'register', component: RegistrationComponent, runGuardsAndResolvers: 'always' },
  { path: 'login', component: LoginComponent, runGuardsAndResolvers: 'always' },
  {
    path: 'certificate', component: CertificateComponent, canActivate: [AuthGuardService]
  },
  {
    path: '',
    redirectTo: '/register',
    pathMatch: 'full'
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
