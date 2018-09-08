import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorComponent } from './error/error.component';
import { BorrowComponent } from './borrow/borrow.component';
import { LenderComponent } from './lender/lender.component';
import { ActionComponent } from './action/action.component';
import { AdminComponent } from './admin/admin.component';

export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home', component: HomeComponent,
        children: [
            { path: '', component: MainComponent },
            { path: 'main', component: MainComponent },
            { path: 'login', component: LoginComponent },
            { path: 'signup', component: SignupComponent }
        ]
    },
    {
        path: 'profile', component: ProfileComponent,
        children: [
            { path: '', component: ErrorComponent },
            { path: 'borrow', component: BorrowComponent },
            { path: 'lender', component: LenderComponent },
            { path: 'action', component: ActionComponent },
            { path: 'admin', component: AdminComponent }

        ]
    }
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router, { useHash: true });