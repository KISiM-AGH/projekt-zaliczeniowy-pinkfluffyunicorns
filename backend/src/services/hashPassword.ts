import argon2 from "argon2";

export const hashPassword = async (password: string) => {
    return await argon2.hash(password, {
        type: argon2.argon2id,
        memoryCost: 4096,
        timeCost: 4,
        hashLength: 32,
        parallelism: 1,
    });
}

export const matchPassword = async (hash : string, plainPass: string) => {
    return argon2.verify(hash, plainPass);
}