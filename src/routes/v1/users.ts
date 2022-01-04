import {Router} from "express";
import {deleteUser, register} from "../../api/users/usersController";
import {bodyValidate} from "../../middleware";
import {CreateUserDto} from "../../api/users/dto/CreateUserDto";


const router = Router();
router.post('/', bodyValidate(CreateUserDto), register);
router.delete('/', bodyValidate(CreateUserDto), deleteUser );

export default router;