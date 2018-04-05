import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss'],
  providers:[DataService]
})
export class StoresComponent implements OnInit {

  // list stores
  stores: any[] = [];

  // text MS error load json
  errorMessage: string;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.onload();
  }

  onload(): void {
    this.dataService.getData('assets/data/stores.json').subscribe(
      data => {
        this.stores = data.stores;
      },
      error => this.errorMessage = <any>error
    );
  }

}
