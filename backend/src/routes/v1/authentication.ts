import {Router} from "express";
import {basicAuthentication, logout} from "../../api/authentication/authenticationController";

const router = Router();

router.post('/', basicAuthentication);
router.post('/logout', logout);

export default router;