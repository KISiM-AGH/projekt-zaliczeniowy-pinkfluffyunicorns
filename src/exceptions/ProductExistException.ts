import {HttpException} from "./HttpException";

export class ProductExistException extends HttpException{
    constructor(message = "Product with this name already exists") {
        super(409,message);

    }

}