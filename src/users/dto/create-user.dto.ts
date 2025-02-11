import { IsEmail, IsEnum, isNotEmpty, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;
    
    @IsNotEmpty()
    password: string;

    @IsEnum(['RECEPTIONIST', 'SALESPERSON', 'SALESMANAGER'], {
        message: 'Valid Role Required...!'
    })
    @IsNotEmpty()
    role: 'RECEPTIONIST' | 'SALESPERSON' | 'SALESMANAGER';
}
