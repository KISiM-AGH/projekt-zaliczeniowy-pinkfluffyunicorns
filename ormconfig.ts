import {ConnectionOptions} from "typeorm";
import {SnakeNamingStrategy} from "typeorm-naming-strategies";
import ProcessEnv = NodeJS.ProcessEnv;

const env = process.env as ProcessEnv;

const config: ConnectionOptions = {

    type : 'mysql',
    host : env.MYSQL_HOST,
    port : Number(env.MYSQL_PORT),
    database : env.MYSQL_DB,
    username : env.MYSQL_USER,
    password : env.MYSQL_PASSWORD,
    synchronize : false,
    logging: true,
    entities : ["./src/typeorm/entity/**/*.ts"],
    migrations : ["./src/typeorm/migrations/**/*.ts"],
    subscribers : ["./src/typeorm/subscribers/**/*.ts"],
    cli:{
        entitiesDir : "src/typeorm/entity",
        migrationsDir: "src/typeorm/migrations",
        subscribersDir: "src/typeorm/subscribers"
    },
    namingStrategy: new SnakeNamingStrategy()
}

export default config;