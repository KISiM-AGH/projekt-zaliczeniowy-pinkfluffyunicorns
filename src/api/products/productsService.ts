import {ProductRepository} from "../../typeorm/repositories/ProductRepository";
import {CreateProductDto} from "./dto/CreateProductDto";
import {ProductEntity} from "../../typeorm/entity/ProductEntity";
import {getCustomRepository} from "typeorm";

export const getProductByName = async (productName:string) : Promise <ProductEntity | undefined> =>{
    const productRepository = getCustomRepository(ProductRepository);
    return await productRepository.findOne({where:{productName}});
}

export const createProduct = async (data: CreateProductDto) : Promise<ProductEntity> => {
    const productRepository = getCustomRepository(ProductRepository);

    const newProduct = new ProductEntity();
    newProduct.productName = data.productName;
    newProduct.productType = data.productType;
    newProduct.description = data.description;
    newProduct.price = data.price;
    newProduct.amount = data.amount;

    return await productRepository.save(newProduct);
}

export const deleteProduct = async (data: ProductEntity) =>{
    const productRepository = getCustomRepository(ProductRepository);
    return await productRepository.remove(data);
}