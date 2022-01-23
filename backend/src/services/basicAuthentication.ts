export const httpAuthDecrypt = (header: string):[string, string] => {
    const base64auth = header.split(' ')[1]|| '';
    const [email, password] = Buffer.from(base64auth, 'base64').toString().split(':');
    return [email,password]
}