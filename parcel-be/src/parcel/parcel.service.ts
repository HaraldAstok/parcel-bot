import { Injectable } from '@nestjs/common';
// import { Repository } from 'typeorm'
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Parcel, Error } from 'src/entities/parcel.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ParcelService {
  constructor(
    @InjectRepository(Parcel)
    private parcelRepository: Repository<Parcel>,
  ) {}

  async create(parcel: Parcel): Promise<Parcel | Error> {
    try {
      return await this.parcelRepository.save(parcel);
    } catch (error) {
      return { error: error.code };
    }
  }

  async readAll(): Promise<Parcel[]> {
    return this.parcelRepository.find();
  }

  async delete(id): Promise<DeleteResult> {
    return await this.parcelRepository.delete(id);
  }
}
