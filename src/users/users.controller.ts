import { UsersService } from './users.service';
import { Controller, Get, Param, Post, Body, Patch, Delete, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdatedUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

        @Get() //GET /users or /users?role=value
        findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN'){
            return this.usersService.findAll(role)
        }

        @Get(':id')  //Get /users/:id
        findOne(@Param('id', ParseIntPipe) id:number){
            return this.usersService.findOne(id)
        }

        @Post()
        create(@Body(ValidationPipe) createUserDto:CreateUserDto){
            return this.usersService.create(createUserDto)
        }

        @Patch(':id')  //Patch /users/:id
        update(@Param('id', ParseIntPipe) id:number, @Body(ValidationPipe) updateUserDto: UpdatedUserDto){
            return this.usersService.update(id, updateUserDto)
        }

        @Delete(':id')  //Delete /users/:id
        delete(@Param('id', ParseIntPipe) id:number){
            return this.usersService.delete(id)
        }
    }   
