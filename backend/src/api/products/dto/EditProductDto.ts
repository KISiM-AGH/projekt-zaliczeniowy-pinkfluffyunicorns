import {IsString, IsNumber, IsNotEmpty, IsOptional} from "class-validator";

export class EditProductDto{
    @IsString()
    @IsOptional()
    readonly productName : string;

    @IsString()
    @IsOptional()
    readonly description: string;

    @IsNumber()
    @IsOptional()
    readonly price : number;

    @IsNumber()
    @IsOptional()
    readonly quantity : number;
}