import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { ParcelService } from './parcel.service';
import { Parcel } from 'src/entities/parcel.entity';

@Controller('parcel')
export class ParcelController {
  constructor(private parcelService: ParcelService) {}

  @Get()
  read(): Promise<Parcel[]> {
    return this.parcelService.readAll();
  }

  @Post('create')
  async create(@Body() parcel: Parcel): Promise<any> {
    return this.parcelService.create(parcel);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.parcelService.delete(id);
  }
}
