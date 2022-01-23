import {IsEmail} from "class-validator";

export class RemoveUserDto{
    @IsEmail()
    readonly email : string
}