import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-storeinfo',
  templateUrl: './storeinfo.component.html',
  styleUrls: ['./storeinfo.component.scss'],
  providers:[DataService]
})
export class StoreInfoComponent implements OnInit {

  // Store Detail show if true
  showStoreDetail= true;

  //id get url
  idStore : any;

  isCreate: boolean;

  //this store
  store: any = {};

  // text MS error load json
  errorMessage: string;

  //list city
  listCity: any[] = [];
  listCountry: any[] = [];

  constructor(
    private router: ActivatedRoute,
    private dataService: DataService
  ) {
    this.router.paramMap.subscribe((params: ParamMap) => {
      this.idStore = params.get("idStore");
      if (!this.idStore) {
        this.isCreate = true;
      }
    });
  }

  ngOnInit() {
    this.onload();
  }

  onload = (): void => {
    this.dataService.getData('assets/data/stores.json').subscribe(
      data => {
        this.store = data.stores.find((item) => {
          return item.storeId = this.idStore;
        }) || {};
      },
      error => this.errorMessage = <any>error
    );

    this.dataService.getData('assets/data/country.json').subscribe(
      data => {
        this.listCountry = data.countries || [];
        this.listCity = this.listCountry[0].cities || [];
      },
      error => this.errorMessage = <any>error
    );
  }
  
}
