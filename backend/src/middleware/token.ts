import {NextFunction, Request, Response} from "express";
import {AccessDeniedException} from "../exceptions/AccessDeniedException";
import {JwtPayload} from "jsonwebtoken";
import {verifyJwt} from "../services/jwt";
import {RequestWithUser} from "../typeorm/types/Express";
import {UserRole} from "../constants/UserRole";

export const token = (required : true) => (req: Request, res: Response, next: NextFunction) => {
    const cookieToken= req.cookies.auth;
    if(!cookieToken) return next(new AccessDeniedException());
    let decodedToken: JwtPayload;

    try{
        decodedToken= verifyJwt(cookieToken)as JwtPayload;
    }catch{
        return next(new AccessDeniedException());
    }

    const user ={
        id:parseInt(decodedToken.sub!),
        role : decodedToken.roles as UserRole
    }

    if(required && !user){
        return next (new AccessDeniedException());
    }

    (req as RequestWithUser).user= user;
    next();
}