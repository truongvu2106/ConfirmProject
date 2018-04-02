import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatSidenavModule,
  MatTabsModule,
  MatDialogModule,
  MatInputModule,
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './pages/login/login.component'
import { RegisterComponent } from './pages/register/register.component'
import { ManageMerchantComponent } from './pages/manage-merchant/manage-merchant.component'
import { FooterComponent } from './components/footer/footer.component';
import { AccountComponent } from './pages/account/account.component';
import { ChangePassModalViewComponent } from './components/changepassmodalview/changepassmodalview.component';
import { ManageDetailComponent } from './pages/manage-detail/managedetail.component';
import { StoreInfoComponent } from './pages/storeinfo/storeinfo.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ManageMerchantComponent,
    AccountComponent,
    ChangePassModalViewComponent,   
    ChangePassModalViewComponent,    
    ManageDetailComponent,      
    ChangePassModalViewComponent,    
    StoreInfoComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatSidenavModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatInputModule,    
  ],
  entryComponents:[
    ChangePassModalViewComponent
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatSidenavModule,
    MatTabsModule,
    MatInputModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
