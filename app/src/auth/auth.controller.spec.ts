import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../users/users.entity';
import { JwtService } from '@nestjs/jwt';

describe('AuthController', () => {
  let controller: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        AuthService,
        {
          provide: UsersService,
          useValue: {
            findOneByEmail: jest.fn().mockResolvedValue({
              email: "testqqtss333@acme.com",
              password: "@7777Celcito",
            }),
          },
        },
        {
          provide: getRepositoryToken(User),
          useClass: User,
        },
        {
        provide:JwtService,
        useValue:{
          signAsync:jest.fn().mockResolvedValue('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RxcXRzczMzM0BhY21lLmNvbSIsInN1YiI6MywiaWF0IjoxNzE3NDE5MTMwLCJleHAiOjE3MTc0MTkxOTB9.3is2NIWrJiUpqEYOkp2e4s9jhcimG1bCr1kHQIA_d')
        }
      },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);

    jest.spyOn(authService, 'signIn').mockImplementation((email, password) =>
      Promise.resolve({
        email,
        password,
      })
    );
  });

  it('should handle successful sign in', async () => {
    await controller.signIn({
      email: "testqqtss333@acme.com",
      password: "@7777Celcito",
    });

    expect(authService.signIn).toHaveBeenCalledWith(
       "testqqtss333@acme.com", "@7777Celcito",
    );
  });


});


