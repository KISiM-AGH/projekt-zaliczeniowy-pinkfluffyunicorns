import {useNavigate, useParams} from "react-router-dom";
import React, {Component, FormEvent, useEffect, useState} from "react";
import product, {Product} from "../../Actions/products";
import {Center, Container, Notification, Paper, Space} from "@mantine/core";
import styles from "../Login/Login.module.css";

export const EditProduct = () => {
    const {id} = useParams<{ id: string }>();
    const [productToEdit, setProductToEdit] = useState<Product>({} as Product)
    const [error, setError] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        product.getProductById(parseInt(id!)).then(
            response => {
                setProductToEdit(response.data)
                console.log(response);
            })

    }, [])

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        product.editProduct(productToEdit.id, productToEdit.productName, productToEdit.description, productToEdit.price, productToEdit.quantity).then(
            () => navigate('/adminPanel')
        ).catch(() => setError(true)
        )
    }

    const setName = (productName : string) => {
        const updatedProduct = {...productToEdit, productName}
        setProductToEdit(updatedProduct)
    }

    const setDescription = (description : string) => {
        const updatedProduct = {...productToEdit, description}
        setProductToEdit(updatedProduct)
    }

    const setPrice = (price : number) => {
        const updatedProduct = {...productToEdit, price}
        setProductToEdit(updatedProduct)
    }

    const setQuantity = (quantity : number) => {
        const updatedProduct = {...productToEdit, quantity}
        setProductToEdit(updatedProduct)
    }

    return (
        <Container size="xl">
            <Space h="md"/>
            <Center>
                <Paper padding="md" shadow="xs" radius="lg">

                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="productName">Nazwa produktu: </label>
                            <input
                                value ={productToEdit.productName}
                                id="productName"
                                type="text"
                                required
                                className={styles.Input}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="description">Opis produktu: </label>
                            <input
                                value={productToEdit.description}
                                id="description"
                                type="text"
                                required
                                className={styles.Input}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="price">Cena: </label>
                            <input
                                value={productToEdit.price}
                                id="price"
                                type="number"
                                step="0.01"
                                required
                                className={styles.Input}
                                onChange={(e) => setPrice(parseFloat(e.target.value))}
                            />
                        </div>

                        <div>
                            <label htmlFor="quantity">Ilość: </label>
                            <input
                                value={productToEdit.quantity}
                                id="quantity"
                                type="number"
                                required
                                className={styles.Input}
                                onChange={(e) => setQuantity(parseInt(e.target.value))}
                            />
                        </div>

                        <button type="submit" className={styles.Input}>Aktualizuj</button>
                    </form>

                </Paper>
            </Center>
            <Space h="md"/>
            {error &&
                <Center>

                    <Notification onClose={() => {
                        setError(false)
                    }} color="red">
                        Błędne dane
                    </Notification>
                </Center>
            }
        </Container>
    )
}