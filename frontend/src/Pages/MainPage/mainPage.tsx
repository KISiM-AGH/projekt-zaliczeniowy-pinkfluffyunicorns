import {Grid} from "@mantine/core";
import ProductCart from "./ProductCart";
import product, {Product} from "../../Actions/products"
import {useEffect, useState} from "react";

export const MainPage = () => {
    const [productToshop, setProductToShop] = useState<Product[]>([])

    useEffect(() => {
        product.getAll().then(response => setProductToShop(response.data))
    }, [])

    return (
        <Grid style={{margin: '10px 0' }}>
            {productToshop.map((product) =>
                <Grid.Col span={4} key={product.id}>
                    <ProductCart id={product.id} productName={product.productName} description={product.description} price={product.price} />
                </Grid.Col>
            )}
        </Grid>
    )
}