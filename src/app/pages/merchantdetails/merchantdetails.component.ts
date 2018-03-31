import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-merchantdetails',
  templateUrl: './merchantdetails.component.html',
  styleUrls: ['./merchantdetails.component.scss'],
  providers:[DataService]
})
export class MerchantDetailsComponent implements OnInit {

  // change view  and update merchant details
  isMerchantdetailsViewShow = true;
  // list merchant categories
  categories: any[] = [];
  // merchant details
  merchant: any = {};

  // text MS error load json
  errorMessage: string;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.onload();
  }

  onload(): void {
    this.dataService.getData('assets/data/merchantdata.json').subscribe(
      data => {
        this.merchant = data.merchant;
        this.categories = data.categories || [];
      },
      error => this.errorMessage = <any>error
    );
  }

  changeViewUpdateMerchant() {
    this.isMerchantdetailsViewShow = !this.isMerchantdetailsViewShow;  
  }

  updateMerchant() {
    this.isMerchantdetailsViewShow = !this.isMerchantdetailsViewShow;
  }

}
