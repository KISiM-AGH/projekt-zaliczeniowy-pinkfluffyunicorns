// import {Connection, createConnection} from "typeorm";
//
// import config from "../../ormconfig";
//
// export const dbCreateConnection() = async() : Promise<Connection | null> => {
//     try{
//         const db_connection = await createConnection(config);
//         console.log(`Successfully connected with database '${db_connection.options.database}'. Connection name: '${db_connection.name}' `)
//     } catch (err){
//         console.log(err);
//     }
//     return null;
// }
