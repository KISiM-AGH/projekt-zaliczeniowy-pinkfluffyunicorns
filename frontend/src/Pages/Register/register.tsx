import React, {FormEvent, FunctionComponent, useState} from "react";
import {Center, Container, Notification, Paper, Space} from "@mantine/core";
import styles from "./Register.module.css";
import {useNavigate} from "react-router-dom";
import register from "../../Actions/register";

interface Props {
}

export const Register: FunctionComponent<Props> = (props: Props) => {
    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [surname, setSurname] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [street, setStreet] = useState<string>("");
    const [homeNumber, setHomeNumber] = useState<string>("");
    const [postalCode, setPostalCode] = useState<string>("");
    const [error, setError] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        const address = JSON.stringify({'city' : city, 'street': street, 'homeNumber': homeNumber, 'postalCode': postalCode})
        register.register(email, password, name, surname, address).then(
            () => navigate('/')
        ).catch(
            () => setError(true)
        )
    }

    return (<Container>
        <Space h="md"/>
        <Center>
            <Paper padding="md" shadow="xs" radius="lg">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            data-e2e="email_input"
                            id='email'
                                name='email'
                                type='text'
                                required
                                className={styles.Input}
                               onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='name'>Imi??</label>
                        <input
                            data-e2e="name_input"
                            id='name'
                               name='name'
                               type='text'
                               required
                               className={styles.Input}
                               onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='surname'>Nazwisko</label>
                        <input
                            data-e2e="surname_input"
                            id='surname'
                               name='surname'
                               type='text'
                               required
                               className={styles.Input}
                               onChange={(e) => setSurname(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Has??o</label>
                        <input
                            data-e2e="password_input"
                            id='password'
                               name='password'
                               type='password'
                               required
                               className={styles.Input}
                               onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <label>Uzupe??nij adres potrzebny do wysy??ki</label>
                    <div className={styles.Address}>
                        <div className={styles.Address_container}>
                            <label htmlFor='street'>Ulica</label>
                            <input
                                data-e2e="street_input"
                                id='street'
                                   name='street'
                                   type='text'
                                   required
                                   className={styles.Input}
                                   onChange={(e) => setStreet(e.target.value)}
                            />
                        </div>
                        <div className={styles.Address_container}>
                            <label htmlFor='homeNumber'>Numer domu</label>
                            <input
                                data-e2e="homeNumber_input"
                                id='homeNumber'
                                   name='homeNumber'
                                   type='text'
                                   required
                                   className={styles.Input}
                                   onChange={(e) => setHomeNumber(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className={styles.Address}>
                        <div className={styles.Address_container}>
                            <label htmlFor='postalCode'>Numer pocztowy</label>
                            <input
                                data-e2e="postalCode_input"
                                id='postalCode'
                                   name='postalCode'
                                   type='text'
                                   required
                                   className={styles.Input}
                                   onChange={(e) => setPostalCode(e.target.value)}
                            />
                        </div>
                        <div className={styles.Address_container}>
                            <label htmlFor='city'>Miasto</label>
                            <input
                                data-e2e="city_input"
                                id='city'
                                   name='city'
                                   type='text'
                                   required
                                   className={styles.Input}
                                   onChange={(e) => setCity(e.target.value)}
                            />
                        </div>

                    </div>

                    <button data-e2e="submit_button" type="submit" className={styles.Input}>Zarejestruj si?? </button>
                </form>

            </Paper>
            <Space h="md"/>
            {error &&
                <Center>

                    <Notification onClose={() => {
                        setError(false)
                    }} color="red">
                        B????dne dane
                    </Notification>
                </Center>
            }

        </Center>

    </Container>)
}
