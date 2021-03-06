import {CookieOptions, NextFunction, Request, Response} from "express";
import {UserNotFoundException} from "../../exceptions/UserNotFoundException";
import {AccessDeniedException} from "../../exceptions/AccessDeniedException";
import {sign} from "../../services/jwt";
import {httpAuthDecrypt} from "../../services/basicAuthentication";
import {BadRequestException} from "../../exceptions/BadRequestException";
import {matchPassword} from "../../services/hashPassword";
import {UserDto} from "../users/dto/UserDto";
import {getUserByEmail} from "../users/usersService";
import {RequestWithUser} from "../../typeorm/types/Express";

export const basicAuthentication = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return next(new AccessDeniedException());
    }
    const [email,password] = httpAuthDecrypt(authHeader);

    try {
        const user = await getUserByEmail(email);

        if(!user){
            return next(new UserNotFoundException());
        }

        if(!(await matchPassword(user.password, password))){
            return next(new AccessDeniedException());
        }

        const token = sign(user.id, user.userRole.toString());

        const publicCookies : CookieOptions = {
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "strict" : 'lax',
            maxAge: 1000 * 60 * 30 * 1,
        }

        const httpCookie : CookieOptions = {
            ...publicCookies,
            httpOnly: true,
        }
        res.cookie('auth', token, httpCookie);
        res.cookie('isLogged', true, publicCookies);
        if(user.userRole === "ADMIN")
            res.cookie('isAdmin',true,publicCookies);

        return res.send(new UserDto(user))
    }catch (err){
        return next(new BadRequestException());
    }
}


export const logout = async (req: Request, res: Response, next: NextFunction) => {
    const user = (req as RequestWithUser).user;
    try{
        res.clearCookie("auth");
        res.clearCookie("isLogged");
        if(user.role ==="ADMIN" ){
            res.clearCookie("isAdmin");
        }

        return res.status(200).send("OK");
    }catch (err){
        return next(new BadRequestException());
    }



}