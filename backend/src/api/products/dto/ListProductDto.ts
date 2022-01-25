import {ProductEntity} from "../../../typeorm/entity/ProductEntity";

export class ListProductDto {
    readonly productName: string;
    readonly description : string;
    readonly productType : string;
    readonly price : number;
    readonly amount : number;

    constructor(entity: ProductEntity) {
        this.productName = entity.productName;
        this.description = entity.description;
        this.price = entity.price;
        this.amount = entity.quantity;
    }
}