import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    //new way 
    private userRepository: Repository<User>,
  ) {}

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }


  async findOneByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { email } });
  }

  

  async findById(id: number): Promise<User | undefined> {
    return this.userRepository.findOne({where:{id}});
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    try {

/*       const user = this.userRepository.create({
        email: createUserDto.email,
        password: createUserDto.password,
        firstName:createUserDto.firstName,
        lastName:createUserDto.lastName,
      }); */

    const user = this.userRepository.create(createUserDto);



      await this.userRepository.save(user);
      return user;
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      throw new HttpException('Registro em uso', HttpStatus.CONFLICT);
    }
  }
}





