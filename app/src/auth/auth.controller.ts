import { Controller, Post,Body,HttpCode} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  async signIn(@Body() signInData: SignInDto): Promise<any> {
    return this.authService.signIn(signInData.email, signInData.password);
  }

  @Post('sign-out')
  @HttpCode(200)
  getlogout(){
    return 'Logout successful'
}

}