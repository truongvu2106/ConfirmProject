import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatIconModule,
  MatSidenavModule,
  MatTabsModule
} from '@angular/material';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AccountComponent } from './pages/account/account.component';
import { MerchantDetailsComponent } from './pages/merchantdetails/merchantdetails.component';
import { StoresComponent } from './pages/stores/stores.component';
import { MyProfileComponent } from './pages/myprofile/myprofile.component';

// import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'account', component: AccountComponent,
    children: [{
        path: '',
        redirectTo: 'myprofile',
        pathMatch: 'full'
      },
      { path: 'myprofile', component: MyProfileComponent },
      { path: 'merchantdetails', component: MerchantDetailsComponent },
      { path: 'stores', component: StoresComponent }
    ]
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
    MerchantDetailsComponent,
    StoresComponent,
    MyProfileComponent
  ]
})
export class AppRoutingModule { }
