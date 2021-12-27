import {CreateUserDto} from "./dto/CreateUserDto"
import {getCustomRepository} from "typeorm";
import {UserRepository} from "../../typeorm/repositories/UserRepository";
import {UserEntity} from "../../typeorm/entity/UserEntity";

export const getUserByEmail = async (email : string): Promise<UserEntity | undefined> => {
    const userRepository = getCustomRepository(UserRepository);
    return await userRepository.findOne({where:{email}});
}

export const createUser = async (data: CreateUserDto) : Promise<UserEntity> => {
    const userRepository = getCustomRepository(UserRepository);

    const newUser = new UserEntity();
    newUser.email = data.email;
    newUser.firstName = data.firstName;
    newUser.lastName = data.lastName;
    newUser.password = data.password;
    return await userRepository.save(newUser);
}