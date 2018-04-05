import { Component, OnInit } from '@angular/core';
// @ngrx
import { Store } from "@ngrx/store";
import { Go } from "../../actions/router";

// rxjs
import { Observable } from "rxjs/Observable";

// reducers
import {
  isAuthenticated,
  State
} from "../../reducers";

// models
import { User } from "../../core/models/user";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // the authenticated user
  public isAuthenticated: Observable<boolean>;

  constructor(private store: Store<State>) { }  

  /**
   * Lifecycle hook that is called after data-bound properties of a directive are initialized.
   * @method ngOnInit
   */
  public ngOnInit() {
    // check isAuthenticated
    this.isAuthenticated = this.store.select(isAuthenticated);
  }

  /**
   * Sign out.
   * @method home
   */
  public signOut() {
    this.store.dispatch(new Go({
          path: ["/users/sign-out"]
        })
    );
  }

}
