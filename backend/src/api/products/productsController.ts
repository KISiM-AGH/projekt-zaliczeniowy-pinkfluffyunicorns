import {NextFunction, Request, Response} from "express";
import {createProduct, deleteProduct, getProductByName, getProducts} from "./productsService";
import {BadRequestException} from "../../exceptions/BadRequestException";
import {CreateProductDto} from "./dto/CreateProductDto";
import {ListProductDto} from "./dto/ListProductDto";
import {ProductExistException} from "../../exceptions/ProductExistException";
import {SearchProductDto} from "./dto/SearchProductDto";
import {FindProductDto} from "./dto/FindProductDto";


export const addProduct = async (req: Request, res: Response, next: NextFunction) =>{
    const data = req.body as CreateProductDto;

    let product = await getProductByName(data.productName);

    if(product){
        return next(new ProductExistException());
    }

    try{
        const newProduct = await createProduct(req.body);
        res.status(201).json(new ListProductDto(newProduct));
    }catch (err){
        return next(new BadRequestException());
    }
}

export const removeProduct = async (req: Request, res: Response, next:NextFunction) =>{
    const data = req.body as FindProductDto;
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

export const listProducts = async (req: Request, res: Response, next: NextFunction) =>{
    const searchQuery = req.query as unknown as SearchProductDto;

    try{
        const [products, total] = await getProducts(searchQuery);
        res.header("X-Products-Total", String(total));
        return res.json(products)
    }catch(err){
        return next(new BadRequestException((<Error>err).message));
    }
};

