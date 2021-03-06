import {ProductRepository} from "../../typeorm/repositories/ProductRepository";
import {CreateProductDto} from "./dto/CreateProductDto";
import {ProductEntity} from "../../typeorm/entity/ProductEntity";
import {getCustomRepository, Like} from "typeorm";
import {SearchProductDto} from "./dto/SearchProductDto";
import {EditProductDto} from "./dto/EditProductDto";

export const getProductByName = async (productName:string) : Promise <ProductEntity | undefined> =>{
    const productRepository = getCustomRepository(ProductRepository);
    return await productRepository.findOne({where:{productName}});
}

export const getProductById = async (id : number) : Promise <ProductEntity|undefined> => {
    const productRepository = getCustomRepository(ProductRepository);
    return await productRepository.findOne(id);
}

export const getProducts = async (data:SearchProductDto) : Promise<[ProductEntity[], number]>=>{
    const {offset, limit, productName, sortBy, sortOrder} =data;

    const productRepository = getCustomRepository(ProductRepository);

    const opt= {
        skip: offset,
        take: limit,
        where: productName? {productName: Like (`%${productName}$%`)}: undefined,
        order:{
            [sortBy]: sortOrder
        }
    }
    //relations - array of relation

    const productPromise =productRepository.find(opt);
    const countPromise = productRepository.count(opt);

    return await Promise.all([productPromise, countPromise]);
}

export const createProduct = async (data: CreateProductDto) : Promise<ProductEntity> => {
    const productRepository = getCustomRepository(ProductRepository);

    const newProduct = new ProductEntity();
    newProduct.productName = data.productName;
    newProduct.description = data.description;
    newProduct.price = data.price;
    newProduct.quantity = data.quantity;

    return await productRepository.save(newProduct);
}

export const deleteProduct = async (data: ProductEntity) =>{
    const productRepository = getCustomRepository(ProductRepository);
    return await productRepository.remove(data);
}

export const editProduct = async (product: ProductEntity, data: EditProductDto): Promise<ProductEntity> =>{
    product.productName = data.productName;
    product.price = data.price;
    product.description = data.description;
    product.quantity = data.quantity;

    const productRepository = getCustomRepository(ProductRepository);
    return productRepository.save(product);
}