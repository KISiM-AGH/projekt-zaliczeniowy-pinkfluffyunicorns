import {IsEmail, IsNotEmpty, IsNumber, IsString, MinLength} from "class-validator";

export class CreateUserDto{
    @IsEmail()
    @IsNotEmpty()
    readonly email : string;

    @IsString()
    readonly firstName : string;

    @IsString()
    readonly lastName : string;

    @IsString()
    @MinLength(8)
    readonly password : string
}