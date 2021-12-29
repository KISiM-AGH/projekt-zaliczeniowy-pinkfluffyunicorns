import {Router} from "express";
import {addProduct, removeProduct} from "../../api/products/productsController";
import {bodyValidate} from "../../middleware";
import {CreateProductDto} from "../../api/products/dto/CreateProductDto";

const router = Router();
router.post('/', bodyValidate(CreateProductDto), addProduct);
router.delete('/rm', bodyValidate(CreateProductDto), removeProduct)

export default router;