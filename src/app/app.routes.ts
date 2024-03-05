import { Routes } from '@angular/router';
import { PasswordresetComponent } from './passwordreset/passwordreset.component';
import { PasswordComponent } from './password/password.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'forgot-password', component: PasswordComponent },
    { path: 'password-reset', component: PasswordresetComponent },

];
