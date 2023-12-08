import { IsEmail, IsEnum ,IsString , IsNotEmpty } from "class-validator";

export class CreateUserDto{

    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsEmail()
    email:string;
    
    @IsEnum(["ADMIN", "ENGINEER", "INTERN"], {
        message: 'Valid role required'
    })
    role: "ADMIN" | "ENGINEER" | "INTERN";
}

