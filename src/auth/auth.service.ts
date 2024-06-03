import { Injectable ,UnauthorizedException} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';
import { JwtService } from '@nestjs/jwt';


const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}


async signIn(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);

        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
          }
       
          const [salt, storedHash] = user.password.split('.');
          const hash = (await scrypt(password, salt, 32)) as Buffer;
       
          if (storedHash != hash.toString('hex')) {
            return new UnauthorizedException('Invalid credentials');
          }

            console.log('logado', user);
            const payload = {
              email: user.email,
              sub: user.id,
            };
            return {
                access_token: await this.jwtService.signAsync(payload),
              }
          }
}
