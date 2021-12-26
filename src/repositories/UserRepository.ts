import {EntityRepository, Repository} from "typeorm";
import {UserEntity} from "../typeorm/entity/UserEntity";

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity>{

}