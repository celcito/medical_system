import { Module } from '@nestjs/common';
import { MedicalCareService } from './medical-care.service';
import { MedicalCareController } from './medical-care.controller';

@Module({
  providers: [MedicalCareService],
  controllers: [MedicalCareController]
})
export class MedicalCareModule {}
