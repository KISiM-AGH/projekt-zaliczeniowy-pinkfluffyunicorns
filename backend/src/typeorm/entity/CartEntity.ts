import {Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {UserEntity} from "./UserEntity";
import {ProductEntity} from "./ProductEntity";

@Entity()
export class CartEntity{
    @PrimaryGeneratedColumn()
    id : number;

    @OneToOne(type => UserEntity, client => client.cart, {onDelete:"CASCADE"})
    @JoinColumn()
    client : UserEntity;

    @ManyToMany(type => ProductEntity, products => products.cart, {cascade:true,
    eager:true})
    @JoinTable()
    products : ProductEntity[]
}