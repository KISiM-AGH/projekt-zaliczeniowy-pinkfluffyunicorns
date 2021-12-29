import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("product")
export class ProductEntity{

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;

    @Column()
    type : string;

    @Column()
    price : number;

    @Column()
    amount : number;
}