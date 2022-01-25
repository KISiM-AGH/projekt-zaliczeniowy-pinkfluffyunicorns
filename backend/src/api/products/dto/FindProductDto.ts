import {IsInt, IsOptional, IsString} from "class-validator";

export class FindProductDto {
    @IsString()
    @IsOptional()
    productName : string;
}