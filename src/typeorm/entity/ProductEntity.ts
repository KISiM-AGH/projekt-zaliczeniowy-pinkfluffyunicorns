import {Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {CartEntity} from "./CartEntity";

@Entity("product")
export class ProductEntity{

    @PrimaryGeneratedColumn()
    id : number;

    @Column({unique: true})
    productName : string;

    @Column("text", )
    description: string;

    @Column()
    productType : string;

    @Column({type: "float"})
    price : number;

    @Column({type: "integer"})
    quantity : number;

    @ManyToMany(type => CartEntity, cart => cart.id)
    carts : CartEntity[]
}