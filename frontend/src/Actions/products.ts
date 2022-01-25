import client from '../Services/api'

export interface Product {
    id: number,
    productName : string,
    description: string,
    price : number,
    quantity : number
}

const products = {
    getAll: () => client.get<Product[]>('/product'),
    addToCart: (id : number) => client.post(`/cart/${id}`),
    getCart: () => client.get<Product[]>('/cart'),
    deleteFromCart: (id : number) => client.delete(`/cart/item/${id}`)
}

export default products