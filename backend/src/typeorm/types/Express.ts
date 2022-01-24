import {Request} from "express";
import {UserRole} from "../../constants/UserRole";

export interface RequestWithUser extends Request{
    user : {
        id : number | undefined
        role : UserRole
    };
}

// export interface RequestWithProduct extends RequestWithUser{
//     product: {
//         productName : string | undefined
//     }
// }