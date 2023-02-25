import { Test, TestingModule } from '@nestjs/testing';
import { ParcelHelperService } from './parcel-helper.service';

describe('ParcelHelperService', () => {
  let service: ParcelHelperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParcelHelperService],
    }).compile();

    service = module.get<ParcelHelperService>(ParcelHelperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
