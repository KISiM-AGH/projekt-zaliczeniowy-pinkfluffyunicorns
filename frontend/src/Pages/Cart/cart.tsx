import {Container, Grid} from "@mantine/core";
import {useState} from "react";
import {Product} from "../../Actions/products";
import ProductCart from "./ProductCart";

export const Cart = () => {
    const [productInCart, setproductInCart] = useState<Product[]>([])

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