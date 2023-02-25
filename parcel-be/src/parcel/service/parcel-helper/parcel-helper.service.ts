import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { CreateParcelDto } from 'src/parcel/model/dto/create-parcel.dto';
import { ParcelInterface } from 'src/parcel/model/parcel.interface';

@Injectable()
export class ParcelHelperService {

    createParcelDtoToEntity(createParcelDto: CreateParcelDto): Observable<ParcelInterface> {
        return of({
            user_id: createParcelDto.user_id,
            sku: createParcelDto.sku,
            description: createParcelDto.description,
            street_address: createParcelDto.street_address,
            town: createParcelDto.town,
            country: createParcelDto.country
        })
    }
}
