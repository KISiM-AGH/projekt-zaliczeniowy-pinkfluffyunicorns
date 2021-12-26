import {HttpException} from "./HttpException";

export class UserNotFoundException extends HttpException{
    constructor(message = "User not found") {
        super(404, message);
    }
}