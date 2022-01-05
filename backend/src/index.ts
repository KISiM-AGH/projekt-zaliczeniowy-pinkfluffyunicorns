import "reflect-metadata";
import "dotenv/config";

import express from 'express';
import helmet from 'helmet';
import morgan from "morgan";
import cors from "cors";

import {errorHandler, routingNotFoundHandler} from "./middleware";
import routes from "./routes";
import {dbCreateConnection} from "./typeorm/dbCreateConnection";
import {queryParser} from 'express-query-parser';
import cookieParser from "cookie-parser";

export const app = express();
app.use(cookieParser());
app.use(helmet());
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true
    })
);
app.use(express.json());
app.use(
    queryParser({
        parseNull: true,
        parseBoolean : true,
        parseNumber : true
    })
)
app.use(morgan('combined'));
app.use('/api', routes);
app.use(errorHandler);
app.use(routingNotFoundHandler);

const port = process.env.PORT || 9501;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});

(async () => {
    await dbCreateConnection();
})();


// createConnection(config).then(async connection => {
//     console.log("Inserting a new user into the database...");
//     const user = new User();
//     user.firstName = "Timber";
//     user.lastName = "Saw";
//     user.email = "mikewasowski@mail.com";
//     user.user_role = "admin";
//     user.password = "wielkafoka123"
//     await connection.manager.save(user);
//     console.log("Saved a new user with id: " + user.id);
//
//     console.log("Loading users from the database...");
//     const users = await connection.manager.find(User);
//     console.log("Loaded users: ", users);
//
//     console.log("Here you can setup and run express/koa/any other framework.");
//
// }).catch(error => console.log(error));
