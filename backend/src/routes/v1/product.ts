import {Router} from "express";
import {
    addProduct,
    editProductCont,
    listProducts,
    removeProduct,
    showProduct
} from "../../api/products/productsController";
import {bodyValidate, queryValidate} from "../../middleware";
import {CreateProductDto} from "../../api/products/dto/CreateProductDto";
import {SearchProductDto} from "../../api/products/dto/SearchProductDto";
import {token} from "../../middleware/token";
import {isAdmin} from "../../middleware/isAdmin";
import {EditProductDto} from "../../api/products/dto/EditProductDto";

const router = Router();
router.get('/',queryValidate(SearchProductDto), listProducts);
router.get('/:id', showProduct);
router.post('/', bodyValidate(CreateProductDto),token(true),isAdmin(true), addProduct);
router.delete('/:id',token(true), isAdmin(true), removeProduct)
router.put('/:id',bodyValidate(EditProductDto), token(true), isAdmin(true), editProductCont);
export default router;