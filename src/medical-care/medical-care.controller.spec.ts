import { Test, TestingModule } from '@nestjs/testing';
import { MedicalCareController } from './medical-care.controller';

describe('MedicalCareController', () => {
  let controller: MedicalCareController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicalCareController],
    }).compile();

    controller = module.get<MedicalCareController>(MedicalCareController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
