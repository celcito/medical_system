import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ConfigModule} from '@nestjs/config'
import { AuthModule } from './auth/auth.module';
import { MedicalCareModule } from './medical-care/medical-care.module';
//import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';



@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),

    
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: '172.27.0.2',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'celcito',
    migrations: ['./migrations/*.ts'],
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize:false,
    migrationsRun: false,
  }),UsersModule, AuthModule, MedicalCareModule,


],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}