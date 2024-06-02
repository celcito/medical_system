import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../users/users.entity';

describe('AuthController', () => {
  let controller: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        AuthService, // Fornecer o AuthService real
        {
          provide: UsersService,
          useValue: {
            findOneByEmail: jest.fn().mockResolvedValue({
              email: "testqqtss333@acme.com",
              password: "@7777Celcito4",
            }),
          },
        },
        {
          provide: getRepositoryToken(User),
          useClass: User,
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);

    // Espiar o método signIn do AuthService e definir o comportamento do mock
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


