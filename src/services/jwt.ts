import jwt from "jsonwebtoken";

export const sign = (id:number) =>
    jwt.sign({sub: id}, process.env.JWT_PASSWORD as string, {expiresIn: '30 minutes'})

export const verifyJwt = (token: string)=>
    jwt.verify(token, process.env.JWT_PASSWORD as string);