import {IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength} from "class-validator";

export class CreateUserDto{
    @IsEmail()
    @IsNotEmpty()
    readonly email : string;

    @IsString()
    @MinLength(8)
    readonly password : string

    @IsString()
    readonly firstName : string;

    @IsString()
    readonly lastName : string;
    
    @IsString()
    readonly userRole: string;


}