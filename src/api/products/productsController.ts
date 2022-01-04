import {NextFunction, Response, Request} from "express";
import {createProduct, getProductByName, deleteProduct, getProducts} from "./productsService";
import {BadRequestException} from "../../exceptions/BadRequestException";
import {CreateProductDto} from "./dto/CreateProductDto";
import {ProductDto} from "./dto/ProductDto";
import {ProductExistException} from "../../exceptions/ProductExistException";
import {SearchProductDto} from "./dto/SearchProductDto";


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
