import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('auth')
export class UsersController {
  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    console.log('Received user data:', body);
  }
}
