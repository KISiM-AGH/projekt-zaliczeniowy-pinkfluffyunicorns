import {HttpException} from "./HttpException";

export class ProductNotFoundException extends HttpException{
    constructor(message = "Product not found") {
        super(404, message);
    }
}