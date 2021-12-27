import {Router} from "express";
import {register} from "../../api/users/usersController";
import {bodyValidate} from "../../middleware";
import {CreateUserDto} from "../../api/users/dto/CreateUserDto";


const router = Router();
router.post('/', bodyValidate(CreateUserDto), register);
router.get('/', bodyValidate(CreateUserDto), )

export default router;