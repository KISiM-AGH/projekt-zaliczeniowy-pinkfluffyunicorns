// import {Column, CreateDateColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
// import {ProductEntity} from "./ProductEntity";
// import {CartEntity} from "./CartEntity";
//
// export class CartItemEntity{
//     @PrimaryGeneratedColumn()
//     id : number
//
//     @ManyToOne(type => ProductEntity, product => product.cartItems)
//         product : ProductEntity
//
//     @ManyToOne(type => CartEntity, cart => cart.products)
//         cart : CartEntity
//
//     @Column( {type:"integer"})
//     quantity : number
//
//     @Column( {type : "float"})
//     price : number
//
//     @Column({type : "float"})
//     discount : number
//
//     @Column()
//     @CreateDateColumn()
//     created_at : Date
//
//     @Column()
//     @UpdateDateColumn()
//     updated_at : Date
//
// }