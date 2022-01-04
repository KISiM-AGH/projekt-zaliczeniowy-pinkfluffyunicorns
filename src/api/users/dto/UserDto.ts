import {UserEntity} from "../../../typeorm/entity/UserEntity";

export class UserDto{
    readonly email : string;
    readonly password : string;
    readonly firstName : string;
    readonly lastName : string;
    readonly address : {
        city: string;
        street: string;
        homeNumber: string;
        postalCode: string;
    }

    constructor(entity : UserEntity) {
        this.email = entity.email;
        this.firstName = entity.firstName;
        this.lastName = entity.lastName;
        this.address = entity.address;
    }
}