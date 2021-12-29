import {ProductEntity} from "../../../typeorm/entity/ProductEntity";

export class ProductDto {
    readonly productName: string;
    readonly description : string;
    readonly productType : string;
    readonly price : number;
    readonly amount : number;

    constructor(entity: ProductEntity) {
        this.productName = entity.productName;
        this.productType = entity.productType;
        this.description = entity.description;
        this.price = entity.price;
        this.amount = entity.amount;
    }
}