import { Controller, Post, Body,  Req, Res, Get, Param, Delete, ParseIntPipe} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ValidationPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse,ApiQuery,ApiBody } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'This action create user.' })
 
  @ApiResponse({
    status: 201,
    description: 'This action create user.' ,
    type:[CreateUserDto]
  })

  async create(@Body(new ValidationPipe({transform:true})) createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'This return list of users.' })
  @ApiResponse({
    status: 200,
    description: 'This return list of users.' ,
    type:[CreateUserDto]
  })

  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')

  @ApiOperation({ summary: 'This return one user.' })
  @ApiResponse({
    status: 200,
    description: 'This return one user.' ,
    type:[CreateUserDto]
  })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findById(id);
  } 


  @ApiOperation({ summary: 'This remove user' })
  @ApiResponse({
    status: 200,
    description: 'This remove user.' ,
  })


  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.userService.remove(id);
  }
}