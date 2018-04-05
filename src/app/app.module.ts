import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpModule } from '@angular/http';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { RouterModule } from '@angular/router';


// @ngrx
import { EffectsModule } from "@ngrx/effects";
import { StoreRouterConnectingModule, RouterStateSerializer } from "@ngrx/router-store";
import { StoreModule } from "@ngrx/store";

import { RouterEffects } from "./effects/router";
import { CustomRouterStateSerializer } from './shared/utils';


// routing
import { AppRoutingModule } from "./app-routing.module";

// components
import { AppComponent } from "./app.component";
import { NotFoundComponent } from "./shared/not-found/not-found.component";

// effects
import { UserEffects } from "./users/users.effects";

// guards
import { AuthenticatedGuard} from "./shared/authenticated.guard";

// reducers
import { metaReducers, reducers } from "./reducers";

// services
import { UserService } from "./core/services/user.service";
import { DataService } from './core/services/data.service';

import { routes } from './app-routing.module';

import 'hammerjs';


import { HeaderComponent } from './shared/header/header.component';
import { MyProfileComponent } from "./users/my-account/my-profile/my-profile.component";
import { MerchantDetailComponent } from "./users/my-account/merchant-detail/merchant-detail.component";
import { StoresComponent } from "./users/my-account/stores/stores.component";
import { ChangePassModalViewComponent } from './shared/changepassmodalview/changepassmodalview.component';

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
  MatTooltipModule,
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HeaderComponent,
    ChangePassModalViewComponent,    
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
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
    EffectsModule.forRoot([
      RouterEffects,
      UserEffects
    ]),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot({
      /*
        They stateKey defines the name of the state used by the router-store reducer.
        This matches the key defined in the map of reducers
      */
      stateKey: 'router',
    }),
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatSidenavModule,
    MatTabsModule,    
  ],
  exports: [
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
  ],
  providers: [
    DataService,
    AuthenticatedGuard,
    UserService,
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer }
  ],
  entryComponents:[
    ChangePassModalViewComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
