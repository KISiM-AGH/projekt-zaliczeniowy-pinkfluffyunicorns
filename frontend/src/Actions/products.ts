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
    deleteFromCart: (id : number) => client.delete(`/cart/item/${id}`),
    deleteProduct: (id : number) => client.delete(`/product/${id}`),
    addProduct: (productName: string, description: string, price: number, quantity: number) => client.post('/product',{
        productName: productName,
        description : description,
        price : price,
        quantity: quantity
    })
}

export default products