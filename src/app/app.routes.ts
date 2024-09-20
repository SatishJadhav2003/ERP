import { Route, Routes } from '@angular/router';
import { LayoutComponent } from './layouts/layout/layout.component';

import { ComingSoonComponent } from './extrapages/coming-soon/coming-soon.component';
import { MaintenanceComponent } from './extrapages/maintenance/maintenance.component';
import { Error404Component } from './extrapages/error404/error404.component';
import { OfflineComponent } from './extrapages/offline/offline.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';

export const routes: Routes = [
    { path: '', component: LayoutComponent, loadChildren: () => import('./pages/pages.route').then(mod => mod.PAGE_ROUTES), canActivate: [AuthGuard] },

    // Auth
    { path: 'user/login', component: LoginComponent },
    // { path: 'register', component: RegisterComponent },
    // { path: 'login-basic', component: LoginBasicComponent },
    // { path: 'login-cover', component: LoginCoverComponent },
    // { path: 'login-boxed', component: LoginBoxedComponent },
    // { path: 'login-modern', component: LoginModernComponent },

    // { path: 'register-basic', component: RegisterBasicComponent },
    // { path: 'register-cover', component: RegisterCoverComponent },
    // { path: 'register-boxed', component: RegisterBoxedComponent },
    // { path: 'register-modern', component: RegisterModernComponent },

    // { path: 'verify-email-basic', component: VerifyEmailBasicComponent },
    // { path: 'verify-email-cover', component: VerifyEmailCoverComponent },
    // { path: 'verify-email-modern', component: VerifyEmailModernComponent },

    // { path: 'two-steps-basic', component: TwostepBasicComponent },
    // { path: 'two-steps-cover', component: TwostepCoverComponent },
    // { path: 'two-steps-boxed', component: TwostepBoxedComponent },
    // { path: 'two-steps-modern', component: TwostepModernComponent },

    // { path: 'logout-basic', component: LogoutBasicComponent },
    // { path: 'logout-cover', component: LogoutCoverComponent },
    // { path: 'logout-boxed', component: LogoutBoxedComponent },
    // { path: 'logout-modern', component: LogoutModernComponent },

    // { path: 'reset-password-basic', component: ResetPassBasicComponent },
    // { path: 'reset-password-cover', component: ResetPassCoverComponent },
    // { path: 'reset-password-boxed', component: ResetPassBoxedComponent },
    // { path: 'reset-password-modern', component: ResetPassModernComponent },

    // { path: 'create-password-basic', component: CreatePassBasicComponent },
    // { path: 'create-password-cover', component: CreatePassCoverComponent },
    // { path: 'create-password-boxed', component: CreatePassBoxedComponent },
    // { path: 'create-password-modern', component: CreatePassModernComponent },




    // extrapages
    { path: 'pages-coming-soon', component: ComingSoonComponent },
    { path: 'pages-maintenance', component: MaintenanceComponent },
    { path: 'pages-404', component: Error404Component },
    { path: 'pages-offline', component: OfflineComponent },

];


