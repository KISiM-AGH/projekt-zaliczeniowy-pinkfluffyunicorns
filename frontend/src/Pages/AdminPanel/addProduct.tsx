import React, {FormEvent, useState} from "react";
import {Center, Container, Notification, Paper, Space} from "@mantine/core";
import styles from "../Login/Login.module.css";
import product, {Product} from "../../Actions/products"
import {useNavigate} from "react-router-dom";

export const AddProduct = () => {
    const [productName, setProductName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [price, setPrice] = useState<number>(0);
    const [quantity, setQuantity] = useState<number>(0);
    const [error, setError] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        product.addProduct(productName, description, price, quantity).then(
            () => navigate('/adminPanel')
        ).catch(() => setError(true)
        )
    }

    return (
        <Container size="xl">
            <Space h="md"/>
            <Center>
                <Paper padding="md" shadow="xs" radius="lg">

                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="productName">Nazwa produktu</label>
                            <input
                                id="productName"
                                type="text"
                                required
                                className={styles.Input}
                                onChange={(e) => setProductName(e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="description">Opis produktu: </label>
                            <input
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
                                id="quantity"
                                type="number"
                                required
                                className={styles.Input}
                                onChange={(e) => setQuantity(parseInt(e.target.value))}
                            />
                        </div>

                        <button type="submit" className={styles.Input}>Dodaj</button>
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