import {useEffect, useState} from "react";
import product, {Product} from "../../Actions/products";
import {Button, Container, Grid} from "@mantine/core";
import ProductCart from "../MainPage/ProductCart";
import AdminProduct from "./adminProduct";
import {useNavigate} from "react-router-dom";



export const AdminPanel = () => {
    const [productInShop, setProductInShop] = useState<Product[]>([])
    const navigate = useNavigate();

    useEffect(() => {
        product.getAll().then(response => setProductInShop(response.data))
    }, [])


    return (
        <>
            <Container>
                Admin panel
                <Button variant="light" color="pink" radius="lg" size="md" uppercase onClick={() => navigate('/addProductPanel')}>
                    Dodaj produkt
                </Button>
            </Container>
            <Grid>
                {productInShop.map((product) =>
                    <Grid.Col span={4} key={product.id}>
                        <AdminProduct id={product.id} productName={product.productName} description={product.description} price={product.price} />
                    </Grid.Col>
                )}
            </Grid>
        </>
    )
}