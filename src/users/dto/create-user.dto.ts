import { IsEmail, Length } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @Length(8, 20)
  password: string;

  @Length(3)
  firstName: string;
  @Length(3)
  lastName: string;
}