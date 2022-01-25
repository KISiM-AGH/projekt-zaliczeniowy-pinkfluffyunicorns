import {useEffect, useState} from "react";
import product, {Product} from "../../Actions/products";
import {Button, Container, Grid} from "@mantine/core";
import AdminProduct from "./adminProduct";
import {useNavigate} from "react-router-dom";



export const AdminPanel = () => {
    const [productInShop, setProductInShop] = useState<Product[]>([])
    const navigate = useNavigate();

    useEffect(() => {
        product.getAll().then(response => setProductInShop(response.data))
    }, [])

    const deleteProduct = (id : number) => {
        product.deleteProduct(id).then( () => {
            setProductInShop(productInShop.filter((product) => product.id !== id))
        })
    }

    return (
        <>
            <Container>
                Admin panel
                <Button variant="light" color="pink" radius="lg" size="md" uppercase onClick={() => navigate('/addProductPanel')}>
                    Dodaj produkt
                </Button>
            </Container>
            <Grid style={{margin: '10px 0' }}>
                {productInShop.map((product) =>
                    <Grid.Col span={4} key={product.id}>
                        <AdminProduct id={product.id} productName={product.productName} description={product.description} price={product.price} delete={deleteProduct}/>
                    </Grid.Col>
                )}
            </Grid>
        </>
    )
}