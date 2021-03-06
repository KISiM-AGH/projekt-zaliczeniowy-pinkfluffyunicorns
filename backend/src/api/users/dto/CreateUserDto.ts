import {IsEmail, IsEnum, IsJSON, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength} from "class-validator";
import {UserRole} from "../../../constants/UserRole";

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
    
    @IsEnum(UserRole)
    @IsOptional()
    readonly userRole: UserRole;

    @IsJSON()
    @IsNotEmpty()
    readonly address: {
        city: string;
        street: string;
        homeNumber: string;
        postalCode: string;
    }


}