import {IsInt, IsOptional, IsString} from "class-validator";

export class DeleteProductDto{
    @IsString()
    @IsOptional()
    productName : string;
}