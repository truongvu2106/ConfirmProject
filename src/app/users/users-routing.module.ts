import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// guards
import { AuthenticatedGuard } from "../shared/authenticated.guard";


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

// routes
const routes: Routes = [
  {
    canActivate: [AuthenticatedGuard],
    path: "my-account",
    component: MyAccountComponent,
    children: [
      {
        path: '',
        redirectTo: 'my-profile',
        pathMatch: 'full'
      },
      { path: 'my-profile', component: MyProfileComponent },
      { path: 'merchant-detail', component: MerchantDetailComponent },
      { path: 'stores', component: StoresComponent }
    ]
  },
  {
    path: "sign-in",
    component: SignInComponent
  },
  {
    path: "sign-up",
    component: SignUpComponent
  },
  {
    path: "forgot-user",
    component: ForgotUserComponent
  },
  {
    path: "forgot-password",
    component: ForgotPasswordComponent
  },
  {
    path: "reset",
    component: ResetComponent
  },
  {
    //canActivate: [AuthenticatedGuard],
    path: "manage-merchant",
    component: ManageMerchantComponent
  },
  {
    path: "detail-merchant",
    component: DetailMerchantComponent
  },
  {
    path: "manage-user",
    component: ManageUsersComponent
  },
  {
    // canActivate: [AuthenticatedGuard],
    path: 'store-detail',
    component: StoreInfoComponent
  },
  {
    // canActivate: [AuthenticatedGuard],
    path: 'store-detail/:idStore',
    component: StoreInfoComponent
  },
  {
    path:'invitemerchant',
    component: InviteMerchantComponent
  },
  {
    path: "**",
    redirectTo: "/404"
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class UsersRoutingModule { }
