import {HttpException} from "./HttpException";

export class BadRequestException extends HttpException{
    constructor(message = "Bad request", status = 400){
        super(status, message)
    }
}