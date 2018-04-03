import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
} from '@angular/material';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ManageMerchantComponent } from './pages/manage-merchant/manage-merchant.component';

import { AccountComponent } from './pages/account/account.component';
import { MerchantDetailsComponent } from './pages/account/merchantdetails/merchantdetails.component';
import { StoresComponent } from './pages/account/stores/stores.component';
import { MyProfileComponent } from './pages/account/myprofile/myprofile.component';
import { ForgotUserComponent } from './pages/login/forgot-user.component';
import { ForgotPasswordComponent } from './pages/login/forgot-password.component';
import { ResetComponent } from './pages/login/reset.component';
import { StoreInfoComponent } from './pages/account/storeinfo/storeinfo.component';

// import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'manage-merchant', component: ManageMerchantComponent },
  { path: 'forgot-user', component: ForgotUserComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetComponent },
  { path: '**', redirectTo: 'home' },
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
  { path: 'store-detail', component: StoreInfoComponent },
  { path: 'store-detail/:idStore', component: StoreInfoComponent },
  { path: '**', redirectTo: 'account' }
];

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
    MerchantDetailsComponent,
    StoresComponent,
    MyProfileComponent
  ]
})
export class AppRoutingModule { }
