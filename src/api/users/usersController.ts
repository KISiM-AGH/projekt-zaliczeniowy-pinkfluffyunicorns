import {NextFunction, Request, Response} from "express";
import {createUser, getUserByEmail} from "./usersService";
import {UserExistException} from "../../exceptions/UserExistException";
import {BadRequestException} from "../../exceptions/BadRequestException";
import {CreateUserDto} from "./dto/CreateUserDto";
import {UserDto} from "./dto/UserDto";
import {RequestWithUser} from "../../typeorm/types/Express"

export const register = async (req: Request, res: Response, next : NextFunction) => {
    const data = req.body as CreateUserDto;

    let user = await getUserByEmail(data.email);

    if(user){
        return next(new UserExistException());
    }

    try {
        const newUser = await createUser(req.body);
        res.status(201).json(new UserDto(newUser));

        }catch (err) {
        return next(new BadRequestException());
    }
}

// export const userCheck = async (req : Request, res : Response, next : NextFunction) => {
//     const user = (req as RequestWithUser).user;
//     return res.json(user);
// }