import { IsEmail, Length,IsDate} from 'class-validator';
import { Transform } from 'class-transformer';
import { PasswordComplexity } from '../../helpers/custom.password.validator'

export class CreateUserDto {
  @IsEmail()
  email: string;

  @Length(8)

  @PasswordComplexity( {
    message: 'The password needs to have at least 8 digits, and at least 1 numeric character and one special character.',
  })
  password: string;

  @Length(3)
  firstName: string;
  @Length(3)
  lastName: string;
  @Transform(({ value }) => new Date(value))

  @IsDate()
  birthDate:Date;

}