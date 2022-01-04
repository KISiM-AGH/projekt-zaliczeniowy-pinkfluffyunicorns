import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany, ManyToOne, OneToOne} from "typeorm";
import {UserEntity} from "./UserEntity";
import {ProductEntity} from "./ProductEntity";

@Entity()
export class CartEntity{
    @PrimaryGeneratedColumn()
    id : number;

    @OneToOne(type => UserEntity, client => client.cart)
    client : UserEntity;

    @ManyToMany(type => ProductEntity, product => product.id )
    products : ProductEntity[]
}