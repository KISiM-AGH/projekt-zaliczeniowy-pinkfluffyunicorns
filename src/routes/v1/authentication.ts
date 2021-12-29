import {Router} from "express";
import {basicAuthentication} from "../../api/authentication/authenticationController";

const router = Router();

router.post('/', basicAuthentication);

export default router;