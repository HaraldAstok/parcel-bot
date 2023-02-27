import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { Parcel } from 'src/app/parcel';

@Component({
  selector: 'app-parcel',
  templateUrl: './parcel.component.html',
  styleUrls: ['./parcel.component.scss'],
})
export class ParcelComponent implements OnInit {
  countries: string[] = [
    'Estonia',
    'Latvia',
    'Lithuania',
    'Finland',
    'Sweden',
    'Norway',
  ];
  displayedColumns: string[] = [
    'id',
    'sku',
    'description',
    'street_address',
    'town',
    'country',
  ];
  dataSource: Parcel[] = [];
  parcel: any = {};

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.readParcels().subscribe((results) => {
      this.dataSource = results;
    });
  }

  selectParcel(parcel: {}) {
    this.parcel = parcel;
  }

  newParcel() {
    this.parcel = {};
  }

  createParcel(f: { value: Parcel }) {
    this.apiService.createParcel(f.value).subscribe((result) => {
      console.log('result ->', result);
    });
  }

  deleteParcel(id: number) {
    this.apiService.deleteParcel(id).subscribe((result) => {
      console.log('result ->', result);
    });
  }

}
