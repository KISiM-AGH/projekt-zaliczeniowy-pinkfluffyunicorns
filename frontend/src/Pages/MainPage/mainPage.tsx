import {Container, Grid} from "@mantine/core";
import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';
import ProductCart from "./ProductCart";
import auth from "../../Actions/auth";
import product, {Product} from "../../Actions/products"
import {useEffect, useState} from "react";

// const products = [
//     {id : 1, productName : "PinkUnicorn", description: "Beautiful cute unicorn", price : 25},
//     {id : 2, productName : "YellowUnicorn", description: "Beautiful cute and fluffy unicorn", price : 35}
// ]

export const MainPage = () => {
    const [productToshop, setProductToShop] = useState<Product[]>([])

    useEffect(() => {
        product.getAll().then(response => setProductToShop(response.data))
    }, [])

    return (
        <Grid>
            {productToshop.map((product) =>
                <Grid.Col span={4} key={product.id}>
                    <ProductCart id={product.id} productName={product.productName} description={product.description} price={product.price} />
                </Grid.Col>
            )}
        </Grid>
    )
}