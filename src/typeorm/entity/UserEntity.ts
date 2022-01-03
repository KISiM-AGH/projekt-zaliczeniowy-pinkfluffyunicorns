import {Column, Entity, JoinColumn, JoinTable, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {CartEntity} from "./CartEntity";


@Entity("user")
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique:true})
    email: string;

    @Column()
    password: string;

    @Column("varchar", {length:15, default:"ghost"})
    userRole: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @OneToOne(type => CartEntity, cart => cart.client, {onDelete: "CASCADE"})
    @JoinColumn()
    cart : CartEntity;
}

