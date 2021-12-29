import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

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
    amount : number;
}