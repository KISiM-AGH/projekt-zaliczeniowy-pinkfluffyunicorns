import {Router} from "express";
import {deleteUser, register,userCheck} from "../../api/users/usersController";
import {bodyValidate} from "../../middleware";
import {CreateUserDto} from "../../api/users/dto/CreateUserDto";
import {RemoveUserDto} from "../../api/users/dto/RemoveUserDto";
import {token} from "../../middleware/token";

const router = Router();
router.post('/', bodyValidate(CreateUserDto), register);
router.delete('/', bodyValidate(RemoveUserDto), deleteUser );
router.get('/', token(true), userCheck)

export default router;