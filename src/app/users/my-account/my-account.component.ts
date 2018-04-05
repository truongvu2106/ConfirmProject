import { Component, OnInit, ViewChild } from '@angular/core';

import { FormControl } from '@angular/forms';

// @ngrx
import { Store } from "@ngrx/store";


import { Go } from "../../actions/router";

// rxjs
import { Observable } from "rxjs/Observable";

// reducers
import {
  getAuthenticatedUser,
  State
} from "../../reducers";

// models
import { User } from "../../core/models/user";

/**
 * The user"s account.
 * @class MyAccountComponent
 */
@Component({
  selector: "app-my-account",
  templateUrl: "./my-account.component.html",
  styleUrls: ["./my-account.component.scss"]
})
export class MyAccountComponent implements OnInit {

  mode = new FormControl('side');

  // the authenticated user
  public user: Observable<User>;
  @ViewChild ('linkActive') linkActive = '';

  /**
   * @constructor
   */
  constructor(private store: Store<State>) { }

  /**
   * Lifecycle hook that is called after data-bound properties of a directive are initialized.
   * @method ngOnInit
   */
  public ngOnInit() {
    // get authenticated user
    this.user = this.store.select(getAuthenticatedUser);
  }

  /**
   * Sign out.
   * @method home
   */
  public signOut() {
    this.store.dispatch(new Go({
      path: ["/users/sign-in"]
    }));
  }

}
