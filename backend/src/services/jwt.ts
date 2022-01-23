import jwt from "jsonwebtoken";

export const sign = (id: number, userRole: string) =>
    jwt.sign({sub: id, roles: userRole}, process.env.JWT_PASSWORD as string, {expiresIn: '30 minutes'})

export const verifyJwt = (token: string)=>
    jwt.verify(token, process.env.JWT_PASSWORD as string);