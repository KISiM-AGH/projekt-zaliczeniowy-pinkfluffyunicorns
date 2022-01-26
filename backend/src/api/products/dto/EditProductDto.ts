import {IsInt, IsNumber, IsOptional, IsPositive, IsString, Min} from "class-validator";

export class EditProductDto{
    @IsString()
    @IsOptional()
    readonly productName : string;

    @IsString()
    @IsOptional()
    readonly description: string;

    @IsNumber()
    @IsOptional()
    @IsPositive()
    @Min(0.01)
    readonly price : number;

    @IsInt()
    @IsPositive()
    @IsOptional()
    readonly quantity : number;
}