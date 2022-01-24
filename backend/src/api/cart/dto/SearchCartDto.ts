import {IsNumber} from "class-validator";

export class SearchCartDto{
    @IsNumber()
    readonly userID : number
}