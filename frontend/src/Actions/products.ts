import client from '../Services/api'

interface Product {
    id: number,
    productName : string,
    description: string,
    price : number
}

const products = {
    getAll: () => client.get<Product[]>('/product'),
}

export default products