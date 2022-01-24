import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToMany,
    OneToMany,
    ManyToOne,
    OneToOne,
    JoinTable,
    JoinColumn
} from "typeorm";
import {UserEntity} from "./UserEntity";
import {ProductEntity} from "./ProductEntity";
// import {CartItemEntity} from "./CartItemEntity";

@Entity()
export class CartEntity{
    @PrimaryGeneratedColumn()
    id : number;

    @OneToOne(type => UserEntity, client => client.cart, {onDelete:"CASCADE"})
    @JoinColumn()
    client : UserEntity;

    // @OneToMany(type => CartItemEntity, products => products.id)
    @ManyToMany(type => ProductEntity, products => products.cart, {cascade:true,
    eager:true})
    @JoinTable()
    products : ProductEntity[]
    // products : CartItemEntity[]
}