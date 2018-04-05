import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

// @angular/flex-layout
import { FlexLayoutModule } from "@angular/flex-layout";

// @angular/material
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
  MatFormFieldModule,
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


// components Authenticated
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { ForgotUserComponent } from './forgot-user/forgot-user.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetComponent } from './reset/reset.component';

// components user view
import { MyAccountComponent } from "./my-account/my-account.component";
import { MyProfileComponent } from "./my-account/my-profile/my-profile.component";
import { MerchantDetailComponent } from "./my-account/merchant-detail/merchant-detail.component";
import { StoresComponent } from "./my-account/stores/stores.component";
import { StoreInfoComponent } from "./my-account/store-info/store-info.component";

// components admin view
import { ManageMerchantComponent } from './manage-merchant/manage-merchant.component';
import { DetailMerchantComponent } from './manage-merchant/detail-merchant/detail-merchant.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { InviteMerchantComponent } from './invite-merchant/invite-merchant.component';


// routing
import { UsersRoutingModule } from "./users-routing.module";


// components constant
const components = [
  MyAccountComponent,
  MyProfileComponent,
  MerchantDetailComponent,
  StoresComponent,
  StoreInfoComponent,
  SignInComponent,
  SignUpComponent,
  ForgotUserComponent,
  ForgotPasswordComponent,
  ResetComponent,
  ManageMerchantComponent,
  DetailMerchantComponent,
  ManageUsersComponent,
  InviteMerchantComponent
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
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
    MatFormFieldModule,
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
    ReactiveFormsModule,
    RouterModule,
    UsersRoutingModule
  ],
  declarations: components,
  exports: components,
})
export class UsersModule { }
