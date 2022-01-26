import {IsInt, IsNotEmpty, IsNumber, IsPositive, IsString, Min} from "class-validator";

export class CreateProductDto{
    @IsString()
    @IsNotEmpty()
    readonly productName : string;

    @IsString()
    @IsNotEmpty()
    readonly description: string;

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    @Min(0.01)
    readonly price : number;

    @IsInt()
    @IsNotEmpty()
    @IsPositive()
    readonly quantity : number;
}