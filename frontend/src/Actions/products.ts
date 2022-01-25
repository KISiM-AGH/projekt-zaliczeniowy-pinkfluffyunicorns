import client from '../Services/api'

export interface Product {
    id: number,
    productName : string,
    description: string,
    price : number,
    quantity : number
}

const products = {
    getAll: () => client.get<Product[]>('/products'),
    addToCart: (name : string) => client.post('/cart', {productName : name})
}

export default products