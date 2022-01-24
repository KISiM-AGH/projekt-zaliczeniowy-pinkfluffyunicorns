import {Router} from "express";

import users from "./users";
import authentication from "./authentication";
import products from "./products"
import cart from "./cart";
const router = Router();

router.use('/users', users);
router.use('/auth', authentication);
router.use('/products', products);
router.use('/cart', cart);


export default router;