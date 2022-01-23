import {Router} from "express";

import users from "./users";
import authentication from "./authentication";
import products from "./products"
const router = Router();

router.use('/users', users);
router.use('/auth', authentication);
router.use('/products', products)


export default router;