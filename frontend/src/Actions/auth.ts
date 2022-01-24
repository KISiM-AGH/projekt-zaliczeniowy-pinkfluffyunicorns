import client from '../Services/api'


const auth = {
    login: (username: string, password: string) => client.post('/auth', {},
        {
            auth: {
                username,
                password
            }
        }),


    logout: () => client.post('/auth/logout')
}


export default auth;