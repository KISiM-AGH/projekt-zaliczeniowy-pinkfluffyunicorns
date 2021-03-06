import {NextFunction, Request, Response} from "express";
import {
    createProduct,
    deleteProduct,
    editProduct,
    getProductById,
    getProductByName,
    getProducts
} from "./productsService";
import {BadRequestException} from "../../exceptions/BadRequestException";
import {CreateProductDto} from "./dto/CreateProductDto";
import {ListProductDto} from "./dto/ListProductDto";
import {ProductExistException} from "../../exceptions/ProductExistException";
import {SearchProductDto} from "./dto/SearchProductDto";
import {EditProductDto} from "./dto/EditProductDto";
import {ProductNotFoundException} from "../../exceptions/ProductNotFoundException";


export const addProduct = async (req: Request, res: Response, next: NextFunction) =>{
    const data = req.body as CreateProductDto;

    let product = await getProductByName(data.productName);

    if(product){
        return next(new ProductExistException());
    }

    try{
        const newProduct = await createProduct(req.body);
        return res.status(201).json(new ListProductDto(newProduct));
    }catch (err){
        return next(new BadRequestException());
    }
}

export const removeProduct = async (req: Request, res: Response, next:NextFunction) =>{
    const id = parseInt(req.params.id)
    let product = await getProductById(id);

    if(!product){
        return next(new BadRequestException());
    }

    try{
        await deleteProduct(product);
        return res.status(204).json("ProductWindow was successfully deleted");
    }catch (err){
        return next(new BadRequestException());
    }
}

export const listProducts = async (req: Request, res: Response, next: NextFunction) =>{
    const searchQuery = req.query as unknown as SearchProductDto;

    try{
        const [products, total] = await getProducts(searchQuery);
        res.header("X-Products-Total", String(total));
        return res.status(200).json(products)
    }catch(err){
        return next(new BadRequestException((<Error>err).message));
    }
};

export const showProduct = async (req: Request, res:Response, next : NextFunction) =>{
    const id = parseInt(req.params.id);

    try{
        const product = await getProductById(id);
        if(!product){
            return next(new ProductNotFoundException());
        }
        return res.status(200).json(product);
    }catch (err){
        return next (new BadRequestException())
    }
}

export const editProductCont = async(req: Request, res:Response, next: NextFunction)=>{
    const id = parseInt(req.params.id);
    const data = req.body as EditProductDto;
    try {
        let product = await getProductById(id);
        if(!product){
            return next(new ProductNotFoundException());
        }

        product = await editProduct(product, data);
        return res.status(201).json(product);
    }catch (err){
        return next(new BadRequestException());
    }
}

