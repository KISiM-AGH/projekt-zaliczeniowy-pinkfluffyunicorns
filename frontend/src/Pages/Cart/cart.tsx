import {Container, Grid} from "@mantine/core";
import {useEffect, useState} from "react";
import ProductCart from "./ProductCart";
import product, {Product} from "../../Actions/products"

export const Cart = () => {
    const [productInCart, setproductInCart] = useState<Product[]>([])

    useEffect(() => {
        product.getCart().then(response => setproductInCart(response.data))
    })

    return (
        <Grid>
            {productInCart.map((product) =>
                <Grid.Col span={4} key={product.id}>
                    <ProductCart id={product.id} productName={product.productName} description={product.description} price={product.price} />
                </Grid.Col>
            )}
        </Grid>
    )
}