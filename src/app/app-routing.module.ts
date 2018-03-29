import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './page/login/login.component';

// import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
