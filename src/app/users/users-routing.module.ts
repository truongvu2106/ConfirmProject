import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// guards
import { AuthenticatedGuard } from "../shared/authenticated.guard";

// components
import { AccountComponent } from "./account/account.component";
import { MyProfileComponent } from "./account/myprofile/myprofile.component";
import { MerchantDetailsComponent } from "./account/merchantdetails/merchantdetails.component";
import { StoresComponent } from "./account/stores/stores.component";
import { StoreInfoComponent } from "./account/storeinfo/storeinfo.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignOutComponent } from "./sign-out/sign-out.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { ForgotUserComponent } from './forgot-user/forgot-user.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetComponent } from './reset/reset.component';

// routes
const routes: Routes = [
  {
    canActivate: [AuthenticatedGuard],
    path: "my-account",
    component: AccountComponent,
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
  {
    canActivate: [AuthenticatedGuard],
    path: 'store-detail',
    component: StoreInfoComponent
  },
  {
    canActivate: [AuthenticatedGuard],
    path: 'store-detail/:idStore',
    component: StoreInfoComponent
  },
  {
    path: "sign-in",
    component: SignInComponent
  },
  {
    path: "sign-out",
    component: SignOutComponent
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
