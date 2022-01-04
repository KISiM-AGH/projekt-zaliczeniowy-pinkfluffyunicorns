import {HttpException} from "./HttpException";

export class UserExistException extends HttpException{
    constructor(message = "This email address is already in use") {
        super(409, message);
    }
}