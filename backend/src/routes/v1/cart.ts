import {Router} from "express";
import {queryValidate} from "../../middleware";
import {token} from "../../middleware/token";
import {addItemToCart, removeAllItemFromCart, removeItemFromCart, showCartItems} from "../../api/cart/cartController";
import {removeFromCart} from "../../api/cart/cartService";

const router = Router();
router.get("/", token(true), showCartItems);
router.post("/:id", token(true), addItemToCart);
router.delete("/item/:id", token(true), removeItemFromCart);
router.delete("/item", token(true), removeAllItemFromCart);
export default router;