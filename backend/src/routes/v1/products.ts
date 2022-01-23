import {Router} from "express";
import {addProduct, listProducts, removeProduct} from "../../api/products/productsController";
import {bodyValidate, queryValidate} from "../../middleware";
import {CreateProductDto} from "../../api/products/dto/CreateProductDto";
import {SearchProductDto} from "../../api/products/dto/SearchProductDto";

const router = Router();
router.get('/',queryValidate(SearchProductDto), listProducts);
router.post('/', bodyValidate(CreateProductDto), addProduct);
router.delete('/', bodyValidate(CreateProductDto), removeProduct)

export default router;