import {HttpException} from "./HttpException";

export class AccessDeniedException extends HttpException{
    constructor(message = "Access denied") {
        super(401, message);
    }
}