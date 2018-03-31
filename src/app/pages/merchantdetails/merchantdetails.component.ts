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
    this.dataService.getData('assets/data/myprofile.json').subscribe(
      data => {
        this.merchant = data;
      },
      error => this.errorMessage = <any>error
    );
  }

  loadData(json:any) {
    this.merchant = json;
  }

  changeViewUpdateMerchant() {
    this.isMerchantdetailsViewShow = !this.isMerchantdetailsViewShow;  
  }

  updateMerchant() {
    this.isMerchantdetailsViewShow = !this.isMerchantdetailsViewShow;
  }

}
