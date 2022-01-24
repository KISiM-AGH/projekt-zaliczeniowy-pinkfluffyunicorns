import {NextFunction, Request, Response} from "express";
import {RequestWithUser} from "../typeorm/types/Express";
import {AccessDeniedException} from "../exceptions/AccessDeniedException";

export const isAdmin = (required: true) => (req: Request, res: Response, next:NextFunction)=>{
    const user = (req as RequestWithUser).user;
    if(user.role !="ADMIN"){
        return next(new AccessDeniedException());
    }
    next();
}