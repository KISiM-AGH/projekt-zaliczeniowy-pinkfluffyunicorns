import {Column, Entity, JoinColumn, JoinTable, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {CartEntity} from "./CartEntity";
import {UserRole} from "../../constants/UserRole";


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

    @OneToOne(type => CartEntity)
    cart: CartEntity

}

