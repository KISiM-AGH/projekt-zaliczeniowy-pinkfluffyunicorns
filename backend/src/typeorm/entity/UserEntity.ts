import {Column, Entity, JoinColumn, JoinTable, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {CartEntity} from "./CartEntity";
import {UserRole} from "../../constants/UserRole";
import {OrderEntity} from "./OrderEntity";


@Entity("user")
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique:true})
    email: string;

    @Column()
    password: string;

    @Column({type : "enum", enum:UserRole, default: UserRole.USER})
    userRole: UserRole;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({type: "json"})
    address: {
        city: string;
        street: string;
        homeNumber: string;
        postalCode: string;
    }

    @OneToOne(type => CartEntity, cart => cart.client, {cascade:["insert"],
        onDelete:"CASCADE"})
    cart: CartEntity

    @OneToMany(type => OrderEntity, orders => orders.buyer)
    orders : OrderEntity[]
}

