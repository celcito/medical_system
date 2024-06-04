import { Controller,  Get, UseGuards} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

//todo in future add roles
@Controller('medical-care')
export class MedicalCareController {


    @Get('')
    @UseGuards(JwtAuthGuard)
  

    getprivate(){
        return 'Bem Vindo'
    }

}
