import {Router} from "express";

import users from "./user";
import authentication from "./authentication";
import products from "./product"
import cart from "./cart";
const router = Router();

router.use('/user', users);
router.use('/auth', authentication);
router.use('/product', products);
router.use('/cart', cart);


export default router;