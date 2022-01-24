import {Container, Grid} from "@mantine/core";
import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';
import Product from "./Product";

const products = [
    {id : 1, productName : "PinkUnicorn", description: "Beautiful cute unicorn", price : 25},
    {id : 2, productName : "YellowUnicorn", description: "Beautiful cute and fluffy unicorn", price : 35}
]

export const MainPage = () => {
    return (
        <Grid>
            {products.map((product) =>
                <Grid.Col span={4} key={product.id}>
                    <Product id={product.id} productName={product.productName} description={product.description} price={product.price} />
                </Grid.Col>
            )}
        </Grid>
    )
}