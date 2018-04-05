import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// guards
import { AuthenticatedGuard } from "./shared/authenticated.guard";

// components
import { NotFoundComponent } from "./shared/not-found/not-found.component";


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
  { path: '**', redirectTo: "/users/sign-in" },
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
