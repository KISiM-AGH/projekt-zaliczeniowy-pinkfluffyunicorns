import {NextFunction, Response, Request} from "express";
import {createProduct, getProductByName, deleteProduct} from "./productsService";
import {BadRequestException} from "../../exceptions/BadRequestException";
import {CreateProductDto} from "./dto/CreateProductDto";
import {ProductDto} from "./dto/ProductDto";
import {ProductExistException} from "../../exceptions/ProductExistException";


export const addProduct = async (req: Request, res: Response, next: NextFunction) =>{
    const data = req.body as CreateProductDto;

    let product = await getProductByName(data.productName);

    if(product){
        return next(new ProductExistException());
    }

    try{
        const newProduct = await createProduct(req.body);
        res.status(201).json(new ProductDto(newProduct));
    }catch (err){
        return next(new BadRequestException());
    }
}

export const removeProduct = async (req: Request, res: Response, next:NextFunction) =>{
    const data = req.body as CreateProductDto;
    let product = await getProductByName(data.productName);

    if(!product){
        return next(new BadRequestException());
    }

    try{
        await deleteProduct(product);
        res.status(204).json("Product was successfully deleted");
    }catch (err){
        return next(new BadRequestException());
    }
}