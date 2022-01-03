import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


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

    @Column({type: "json"})
    address: {
        city: string;
        street: string;
        homeNumber: string;
        postalCode: string;
    }

}

