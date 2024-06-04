import { Module } from '@nestjs/common';
import { MedicalCareService } from './medical-care.service';
import { MedicalCareController } from './medical-care.controller';
import { AuthModule } from '../auth/auth.module'

@Module({
  imports:[AuthModule],
  providers: [MedicalCareService],
  controllers: [MedicalCareController]
})
export class MedicalCareModule {}
