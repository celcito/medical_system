import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module'
import { JwtModule } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports:[
    PassportModule,
    JwtModule.registerAsync({
      inject:[ConfigService],
      useFactory: (configService: ConfigService) => ({
       secret: configService.getOrThrow('JWT_SECRET'),
        signOptions: { expiresIn: '60m' },
      }),
    }),
    
    UsersModule],
  providers: [AuthService,JwtStrategy],
  exports: [JwtModule, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
