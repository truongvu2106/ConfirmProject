import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// guards
import { AuthenticatedGuard } from "./shared/authenticated.guard";

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
// components
import { NotFoundComponent } from "./not-found/not-found.component";

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
export const routes: Routes = [
  {
    path: "users",
    loadChildren: "./users/users.module#UsersModule"
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/users/my-account"
  },
  {
    path: "404",
    component: NotFoundComponent
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  exports: [
    RouterModule
  ],
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
    RouterModule.forRoot(routes)
  ],
  declarations: [
    MerchantDetailsComponent,
    StoresComponent,
    MyProfileComponent
  ]

})
export class AppRoutingModule { }
