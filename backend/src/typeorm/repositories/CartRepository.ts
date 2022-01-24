import {CartEntity} from "../entity/CartEntity";
import {EntityRepository, Repository} from "typeorm";

@EntityRepository(CartEntity)
export class CartRepository extends Repository<CartEntity>{

}