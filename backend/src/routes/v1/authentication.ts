import {Router} from "express";
import {basicAuthentication, logout} from "../../api/authentication/authenticationController";
import {token} from "../../middleware/token";

const router = Router();

router.post('/', basicAuthentication);
router.post('/logout',token(true), logout);

export default router;