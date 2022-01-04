import {IsEmail, IsJSON, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength} from "class-validator";

export class CreateUserDto{
    @IsEmail()
    @IsNotEmpty()
    readonly email : string;

    @IsString()
    @MinLength(8)
    @IsNotEmpty()
    readonly password : string

    @IsString()
    @IsNotEmpty()
    readonly firstName : string;

    @IsString()
    @IsNotEmpty()
    readonly lastName : string;
    
    @IsString()
    @IsOptional()
    readonly userRole: string;

    @IsJSON()
    @IsNotEmpty()
    readonly address: {
        city: string;
        street: string;
        homeNumber: string;
        postalCode: string;
    }


}