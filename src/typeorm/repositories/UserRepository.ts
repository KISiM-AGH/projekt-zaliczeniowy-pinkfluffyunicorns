import {EntityRepository, Repository} from "typeorm";
import {UserEntity} from "../entity/UserEntity";

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity>{

}