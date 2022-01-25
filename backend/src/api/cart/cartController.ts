import {NextFunction, Request, Response} from "express";
import {RequestWithUser} from "../../typeorm/types/Express";
import {addToCart, getCart, removeFromCart} from "./cartService";
import {BadRequestException} from "../../exceptions/BadRequestException";
import {FindProductDto} from "../products/dto/FindProductDto";
import {getProductByName} from "../products/productsService";

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
    const product = req.body as FindProductDto;
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
    const product = req.body as FindProductDto;
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
