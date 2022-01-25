import {Button, Container, Grid, Space} from "@mantine/core";
import {useEffect, useState} from "react";
import ProductCart from "./ProductCart";
import product, {Product} from "../../Actions/products"

export const Cart = () => {
    let [productInCart, setproductInCart] = useState<Product[]>([])

    useEffect(() => {
        product.getCart().then(response => setproductInCart(response.data))
    }, [])

    const toDelete = (id : number) => {
        product.deleteFromCart(id).then( () => {
            setproductInCart(productInCart.filter((product) => product.id !== id))}
        )
    }

    const tpay = () => {
        product.payForProducts().then( () => {
                setproductInCart([])
            }
        )
    }

    const sumPrice = productInCart.reduce((sumPrice, sum) => sumPrice + sum.price, 0);

    return (
        <>
            <Container>
                Koszt twoich zakupów wynosi: {sumPrice}
                <Button variant="light" color="pink" radius="lg" size="md" uppercase onClick={() => tpay()}>
                    $ Zapłać teraz
                </Button>
            </Container>
            <Space h="md" />
            <Grid style={{margin: '10px 0' }}>
                {productInCart.map((product) =>
                    <Grid.Col span={4} key={product.id}>
                        <ProductCart id={product.id} productName={product.productName} description={product.description} price={product.price} delete={toDelete}/>
                    </Grid.Col>
                )}
            </Grid>
        </>
    )
}