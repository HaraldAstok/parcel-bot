import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Parcel } from 'src/app/parcel';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}
  // API_SERVER = "http://localhost:3000";

  public readParcels() {
    return this.httpClient.get<Parcel[]>('/parcel-be/parcel');
  }

  public createParcel(parcel: Parcel) {
    return this.httpClient.post<Parcel>('/parcel-be/parcel/create', parcel);
  }

  public deleteParcel(id: number) {
    return this.httpClient.delete(`/parcel-be/parcel/${id}/delete`)
  }
}
