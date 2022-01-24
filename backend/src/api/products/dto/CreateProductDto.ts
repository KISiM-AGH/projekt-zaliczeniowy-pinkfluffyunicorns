import {IsString, IsNumber, IsNotEmpty} from "class-validator";

export class CreateProductDto{
    @IsString()
    @IsNotEmpty()
    readonly productName : string;

    @IsString()
    @IsNotEmpty()
    readonly description: string;

    @IsNumber()
    @IsNotEmpty()
    readonly price : number;

    @IsNumber()
    @IsNotEmpty()
    readonly quantity : number;
}