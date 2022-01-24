import {Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {ProductEntity} from "./ProductEntity";
import {OrderEntity} from "./OrderEntity";


@Entity("order_item")
export class OrderItemEntity{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    price : number;

    @Column()
    quantity : number;

    @Column()
    discount : number

    @ManyToOne(type => ProductEntity, product => product.orderItems )
    product : ProductEntity

    @ManyToOne(type => OrderEntity, order => order.orderItem)
    order : OrderEntity
}