import {Router} from "express";
import {queryValidate} from "../../middleware";
import {token} from "../../middleware/token";
import {addItemToCart, removeItemFromCart, showCartItems} from "../../api/cart/cartController";
import {removeFromCart} from "../../api/cart/cartService";

const router = Router();
router.get("/", token(true), showCartItems);
router.post("/", token(true), addItemToCart);
router.delete("/item", token(true), removeItemFromCart);

export default router;