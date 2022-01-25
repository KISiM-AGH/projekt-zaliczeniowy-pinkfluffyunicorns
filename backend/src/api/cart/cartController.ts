import {NextFunction, Request, Response} from "express";
import {RequestWithUser} from "../../typeorm/types/Express";
import {addToCart, getCart, removeFromCart} from "./cartService";
import {BadRequestException} from "../../exceptions/BadRequestException";
import {FindProductDto} from "../products/dto/FindProductDto";
import {getProductById, getProductByName} from "../products/productsService";
import {ProductNotFoundException} from "../../exceptions/ProductNotFoundException";

export const showCartItems = async (req: Request, res:Response, next: NextFunction) =>{
    const user = (req as RequestWithUser).user;
    try{
        let cart = await getCart(user.id!);
        return res.json(cart?.products)
    }catch (err){
        return next(new BadRequestException((<Error> err).message));
    }
}

export const addItemToCart = async (req: Request, res:Response, next:NextFunction) =>{
    const user = (req as RequestWithUser).user;
    const productId = parseInt(req.params.id);


    try {
        let cart = await getCart(user.id!);
        let _product = await getProductById(productId);
        if(!_product){
            return next(new ProductNotFoundException());
        }
        await addToCart(cart!, _product);
        return res.status(201).json("Product was successfully added to cart");
    }catch (err){
        return next(new BadRequestException((<Error> err).message));
    }
}


export const removeItemFromCart = async (req: Request, res:Response, next:NextFunction) =>{
    const user = (req as RequestWithUser).user;
    const productId = parseInt(req.params.id);
    let cart = await getCart(user.id!);
    let _product = await getProductById(productId);
    if(!_product){
        return next(new BadRequestException());
    }

    try {
        await removeFromCart(cart!, _product);
        return res.status(204).json("Product was successfully deleted from cart");
    }catch (err){
        return next(new BadRequestException((<Error> err).message));
    }
}

export const removeAllItemFromCart = async (req: Request, res:Response, next:NextFunction) =>{
    const user = (req as RequestWithUser).user;
    try{
        let cart = await getCart(user.id!);
        if(!cart){
            return next(new BadRequestException())
        }
        let price : number = 0.0
        cart.products.forEach((product)=>{
           price += product.price;
           removeFromCart(cart!, product);
        })
        res.json(price)
        // res.status(200).json("Transaction finalized correctly")
    }catch (err){
        return next(new BadRequestException());
    }
}
