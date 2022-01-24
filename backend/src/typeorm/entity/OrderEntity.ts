import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {OrderItemEntity} from "./OrderItemEntity";
import {UserEntity} from "./UserEntity";


@Entity("order")
export class OrderEntity{
    @PrimaryGeneratedColumn()
    id : number;

    @Column({type: "smallint"})
    status : number;

    @Column({type: "float"})
    totalPrice : number;

    @OneToMany(type => OrderItemEntity, orderItem => orderItem.id)
    orderItem : OrderItemEntity[];

    @ManyToOne(type => UserEntity, buyer => buyer.orders)
    buyer = UserEntity;

}