import {NextFunction, Request, Response} from "express";
import {token} from "../../middleware/token";
import {RequestWithUser} from "../../typeorm/types/Express";
import {addToCart, getCart, removeFromCart} from "./cartService";
import {BadRequestException} from "../../exceptions/BadRequestException";
import {getCustomRepository} from "typeorm";
import {UserRepository} from "../../typeorm/repositories/UserRepository";
import {DeleteProductDto} from "../products/dto/DeleteProductDto";
import {getProductByName} from "../products/productsService";
import products from "../../routes/v1/products";

export const showCartItems = async (req: Request, res:Response, next: NextFunction) =>{
    const user = (req as RequestWithUser).user;
    try{
        let cart = await getCart(user.id!);
        return res.json(cart)
    }catch (err){
        return next(new BadRequestException((<Error> err).message));
    }
}

export const addItemToCart = async (req: Request, res:Response, next:NextFunction) =>{
    const user = (req as RequestWithUser).user;
    const product = req.body as DeleteProductDto;
    let cart = await getCart(user.id!);
    let _product = await getProductByName(product.productName);
    if(!_product){
        return next(new BadRequestException());
    }

    try {
        await addToCart(cart!, _product);
        res.status(201).json("ProductWindow was successfully added to cart");
    }catch (err){
        return next(new BadRequestException((<Error> err).message));
    }
}


export const removeItemFromCart = async (req: Request, res:Response, next:NextFunction) =>{
    const user = (req as RequestWithUser).user;
    const product = req.body as DeleteProductDto;
    let cart = await getCart(user.id!);
    let _product = await getProductByName(product.productName);
    if(!_product){
        return next(new BadRequestException());
    }

    try {
        await removeFromCart(cart!, _product);
        res.status(204).json("ProductWindow was successfully deleted from cart");
    }catch (err){
        return next(new BadRequestException((<Error> err).message));
    }
}
