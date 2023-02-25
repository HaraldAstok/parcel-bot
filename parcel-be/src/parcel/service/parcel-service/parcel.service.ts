import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { ParcelEntity } from 'src/parcel/model/parcel.entity';
import { ParcelInterface } from 'src/parcel/model/parcel.interface';
import { Repository } from 'typeorm';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class ParcelService {
  constructor(
    @InjectRepository(ParcelEntity)
    private readonly parcelRepository: Repository<ParcelEntity>,
  ) {}

  create(newParcel: ParcelInterface): Observable<ParcelInterface> {
    return this.skuExists(newParcel.sku).pipe(
      switchMap((exists: boolean) => {
        if (exists) {
          return this.
        } else {
          throw new HttpException('SKU already exists', HttpStatus.CONFLICT)
        }
      })
    )
  }
  
  private skuExists(sku: string): Observable<boolean> {
    return from(this.parcelRepository.findOne({ sku })).pipe(
      map((parcel: ParcelInterface) => {
        if (parcel) {
          return true;
        }
        return false;
      }),
    );
  }
}
