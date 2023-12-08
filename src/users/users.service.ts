import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdatedUserDto } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            "id" : 1,
            "name" : "Vineet Gupta",
            "email" : "vineet@email.com",
            "role" : "ENGINEER",
        },
        {
            "id" : 2,
            "name" : "Vivek Kumar",
            "email" : "vivek@email.com",
            "role" : "INTERN",
        },
        {
            "id" : 3,
            "name" : "Sarika Gupta",
            "email" : "sarika@email.com",
            "role" : "INTERN",
        },
        {
            "id" : 4,
            "name" : "Vishal Gupta",
            "email" : "vishal@email.com",
            "role" : "INTERN",
        },
        {
            "id" : 5,
            "name" : "Krishna Gupta",
            "email" : "krishna@email.com",
            "role" : "ADMIN",
        },
    ]

    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN'){
        if (role){
            const rolesArray = this.users.filter(user => user.role === role)
            if(rolesArray.length === 0) throw new NotFoundException("Users role not found")
            return rolesArray
        }
        return this.users
    }

    findOne(id:number){
        const user = this.users.find(user => user.id === id)
        if(!user) throw new NotFoundException('User Not Found')
        return user
    }

    create(createUserDto: CreateUserDto){
        const usersByHighestId = [...this.users].sort((a,b) => b.id - a.id)

        const newUser = {
            id:usersByHighestId[0].id +1,
            ...createUserDto
        }
        this.users.push(newUser)
        return newUser
    }

    update(id: number, updatedUserDto: UpdatedUserDto){
        this.users = this.users.map(user => {
            if(user.id === id){
                return {...user, ...updatedUserDto}
            }
            return user
        })
        return this.findOne(id)
    }

    delete(id:number){
        const removeUser = this.findOne(id)

        this.users = this.users.filter(user => user.id !== id)

        return removeUser
    }
}
