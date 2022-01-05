import {Router} from "express";
import {deleteUser, register} from "../../api/users/usersController";
import {bodyValidate} from "../../middleware";
import {CreateUserDto} from "../../api/users/dto/CreateUserDto";
import {RemoveUserDto} from "../../api/users/dto/RemoveUserDto";


const router = Router();
router.post('/', bodyValidate(CreateUserDto), register);
router.delete('/', bodyValidate(RemoveUserDto), deleteUser );

export default router;