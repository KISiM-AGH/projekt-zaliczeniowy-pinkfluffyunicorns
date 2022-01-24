import {Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {CartEntity} from "./CartEntity";
import {OrderItemEntity} from "./OrderItemEntity";
// import {CartItemEntity} from "./CartItemEntity";

@Entity("product")
export class ProductEntity{

    @PrimaryGeneratedColumn()
    id : number;

    @Column({unique: true})
    productName : string;

    @Column("text", )
    description: string;

    @Column({type: "float"})
    price : number;

    @Column({type: "integer"})
    quantity : number;

    // @OneToMany(type => CartItemEntity, cartItem => cartItem.product)
    @ManyToMany(type => CartEntity, cart => cart.products)
    cart : CartEntity[]
    // cartItems : CartEntity[]

    @OneToMany(type => OrderItemEntity,orderItem => orderItem.product)
    orderItems: OrderItemEntity[]
}