import {IsEnum, IsIn, IsInt, IsOptional, IsString, Max, Min} from "class-validator";
import {SortOrder} from "../../../constants/SortOrder";

export class SearchProductDto{
    @IsInt()
    @Min(0)
    readonly offset : number = 0 ;

    @IsInt()
    @Min(0)
    @Max(20)
    readonly limit : number = 20;

    @IsString()
    @IsOptional()
    readonly productName? :string;

    @IsIn(["id", "productName", "price"])
    readonly sortBy = "productName";

    @IsEnum(SortOrder)
    readonly sortOrder = SortOrder.ASC


}