import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { Parcel } from 'src/app/parcel';

@Component({
  selector: 'app-parcel',
  templateUrl: './parcel.component.html',
  styleUrls: ['./parcel.component.scss'],
})
export class ParcelComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'sku',
    'description',
    'street_address',
    'town',
    'country',
    'delivery_date'
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
    console.log('PARCEL ->', f.value)
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
