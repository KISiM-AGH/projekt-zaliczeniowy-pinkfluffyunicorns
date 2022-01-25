import client from '../Services/api'

const register = {
    register : (email : string, password : string, name : string, surname : string, address : string) => client.post('/user', {
        email : email,
        password: password,
        firstName : name,
        lastName : surname,
        address : address
    })
}

export default register;