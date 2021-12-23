import {Entity, PrimaryGeneratedColumn, Column, Unique} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number | undefined;

    @Column()
    firstName: string | undefined;

    @Column()
    lastName: string | undefined;

    @Column({unique:true})
    email: string | undefined;

    @Column()
    password: string | undefined;

    @Column({type:"varchar",length:15})
    user_role: string | undefined;
}
