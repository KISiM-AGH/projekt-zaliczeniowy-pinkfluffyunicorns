import {Router} from "express";
import {addProduct, listProducts, removeProduct, showProduct} from "../../api/products/productsController";
import {bodyValidate, queryValidate} from "../../middleware";
import {CreateProductDto} from "../../api/products/dto/CreateProductDto";
import {SearchProductDto} from "../../api/products/dto/SearchProductDto";
import {token} from "../../middleware/token";
import {isAdmin} from "../../middleware/isAdmin";

const router = Router();
router.get('/',queryValidate(SearchProductDto), listProducts);
router.post('/', bodyValidate(CreateProductDto),token(true),isAdmin(true), addProduct);
router.delete('/:id',token(true), isAdmin(true), removeProduct)
router.get('/:id', showProduct);
export default router;