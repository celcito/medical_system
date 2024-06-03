import { Test, TestingModule } from '@nestjs/testing';
import { MedicalCareService } from './medical-care.service';

describe('MedicalCareService', () => {
  let service: MedicalCareService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicalCareService],
    }).compile();

    service = module.get<MedicalCareService>(MedicalCareService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
