import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  mode = new FormControl('side');
  @ViewChild ('linkActive') linkActive = '';
  constructor() { }

  ngOnInit() {
  }

}
