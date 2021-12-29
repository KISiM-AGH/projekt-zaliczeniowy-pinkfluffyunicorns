import {Router} from "express";

import users from "./users";
import authentication from "./authentication";

const router = Router();

router.use('/users', users);
router.use('/auth', authentication);

export default router;