import {CartRepository} from "../../typeorm/repositories/CartRepository";
import {getCustomRepository, Like} from "typeorm";
import {CartEntity} from "../../typeorm/entity/CartEntity";
import {UserRepository} from "../../typeorm/repositories/UserRepository";
import {ProductEntity} from "../../typeorm/entity/ProductEntity";

export const getCart = async (id : number): Promise<CartEntity | undefined> =>{
    const cartRepository = getCustomRepository(CartRepository);
    const _user = await getCustomRepository(UserRepository).createQueryBuilder("user")
        .innerJoinAndSelect('user.cart', 'cart')
        .where('user.id = :id', {id: id}).getOne()
    return await cartRepository.findOne(_user?.cart.id)
}

export const addToCart = async (cart: CartEntity,product:ProductEntity)=> {
    const cartRepository = getCustomRepository(CartRepository);
    return await cartRepository.createQueryBuilder().relation(CartEntity, "products").of(cart).add(product);
}

export const removeFromCart = async (cart: CartEntity,product:ProductEntity)=> {
    const cartRepository = getCustomRepository(CartRepository);
    return await cartRepository.createQueryBuilder().relation(CartEntity, "products").of(cart).remove(product);
}