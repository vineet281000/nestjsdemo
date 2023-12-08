import { UserService } from './user.service';
import { Body, Controller, Get, Post, Put } from '@nestjs/common';

// user HTTP GET
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  getHello(): string {
    return this.userService.getHello();
  }

  @Post('/')
  postHello(@Body() args): string {
    return this.userService.getHello();
  }

  
  @Put('/')
  putHello(@Body() args): string {
    return this.userService.getHello();
  }

}