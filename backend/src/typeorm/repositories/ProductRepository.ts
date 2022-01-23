import {ProductEntity} from "../entity/ProductEntity";
import {EntityRepository, Repository} from "typeorm";

@EntityRepository(ProductEntity)
export class ProductRepository extends Repository<ProductEntity>{

}