import {CreateUserDto} from "./dto/CreateUserDto"
import {getCustomRepository} from "typeorm";
import {UserRepository} from "../../typeorm/repositories/UserRepository";
import {UserEntity} from "../../typeorm/entity/UserEntity";
import {CartEntity} from "../../typeorm/entity/CartEntity";
import {CartRepository} from "../../typeorm/repositories/CartRepository";

export const getUserByEmail = async (email : string): Promise<UserEntity | undefined> => {
    const userRepository = getCustomRepository(UserRepository);
    return await userRepository.findOne({where:{email}});
};

export const createUser = async (data: CreateUserDto) : Promise<UserEntity> => {
    const userRepository = getCustomRepository(UserRepository);
    const cartRepository = getCustomRepository(CartRepository);

    const newUser = new UserEntity();
    const newCart = new CartEntity();
    newUser.email = data.email;
    newUser.password = data.password;
    newUser.firstName = data.firstName;
    newUser.lastName = data.lastName;
    newUser.userRole = data.userRole;
    newUser.address = data.address
    newUser.cart = newCart;
    newCart.client = newUser;
    return await userRepository.save(newUser);
};

export const removeUser = async (data: UserEntity) => {
    const userRepository = getCustomRepository(UserRepository);
    return await userRepository.remove(data);
};