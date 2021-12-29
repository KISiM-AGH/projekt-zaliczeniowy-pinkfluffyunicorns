import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity("user")
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique:true})
    email: string;

    @Column()
    password: string;

    @Column({type:"varchar",length:15,default:"ghost"})
    userRole: string;

    @Column({default:"Alojzy"})
    firstName: string;

    @Column()
    lastName: string;
}

