import {EntitySubscriberInterface,EventSubscriber, InsertEvent, UpdateEvent} from "typeorm";
import {UserEntity} from "../entity/UserEntity";
import {hashPassword} from "../../services/hashPassword";

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface{
    listenTo(){
        return UserEntity;
    }
    async beforeInsert(event: InsertEvent<UserEntity>){
        const entity = event.entity!;
        if(entity.password){
            entity.password = await hashPassword(entity.password);
        }
    }
    async beforeUpdate(event: UpdateEvent<UserEntity>){
        const entity = event.entity!;
        if(entity.password && entity.password !== event.databaseEntity.password){
            entity.password = await hashPassword(entity.password);
        }
    }
}