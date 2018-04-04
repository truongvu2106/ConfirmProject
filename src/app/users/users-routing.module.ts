import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// guards
import { AuthenticatedGuard } from "../shared/authenticated.guard";

// components
import { AccountComponent } from "./account/account.component";
import { MyProfileComponent } from "./account/myprofile/myprofile.component";
import { MerchantDetailsComponent } from "./account/merchantdetails/merchantdetails.component";
import { StoresComponent } from "./account/stores/stores.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignOutComponent } from "./sign-out/sign-out.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

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
