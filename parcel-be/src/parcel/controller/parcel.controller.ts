import { Body, Controller, Post, Get } from '@nestjs/common';
import { Observable, of, switchMap } from 'rxjs';
import { CreateParcelDto } from '../model/dto/create-parcel.dto';
import { ParcelInterface } from '../model/parcel.interface';
import { ParcelHelperService } from '../service/parcel-helper/parcel-helper.service';
import { ParcelService } from '../service/parcel-service/parcel.service';

@Controller('parcels')
export class ParcelController {
  constructor(
    private parcelService: ParcelService,
    private parcelHelperService: ParcelHelperService,
  ) {}

  @Post()
  create(@Body() createdParcelDto: CreateParcelDto): Observable<boolean> {
    return this.parcelHelperService.createParcelDtoToEntity(createdParcelDto).pipe(
      switchMap((parcel: ParcelInterface) => this.parcelService.create())
    )
  }

  @Get()
  find() {}
}
