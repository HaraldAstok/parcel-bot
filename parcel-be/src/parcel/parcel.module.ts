import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParcelController } from './controller/parcel.controller';
import { ParcelEntity } from './model/parcel.entity';
import { ParcelService } from './service/parcel-service/parcel.service';
import { ParcelHelperService } from './service/parcel-helper/parcel-helper.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([ParcelEntity])
  ],
  controllers: [ParcelController],
  providers: [ParcelService, ParcelHelperService]
})
export class ParcelModule {}
