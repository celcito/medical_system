import { IsEmail, Length } from 'class-validator';

export class SignInDto {
  @IsEmail()
  email: string;

  @Length(8, 20)
  password: string;

}