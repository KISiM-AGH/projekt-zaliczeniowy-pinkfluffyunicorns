import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity("user")
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({unique:true})
    email: string;

    @Column()
    password: string;

    @Column({type:"varchar",length:15})
    user_role: string;
}

