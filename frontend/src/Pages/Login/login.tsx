import React, {FormEvent, FunctionComponent, useState} from 'react';
import {Center, Container, Notification, Paper, Space} from "@mantine/core";
import {useNavigate} from "react-router-dom";
import auth from "../../Actions/auth";
import styles from "./Login.module.css";



interface Props {
}


export const Login: FunctionComponent<Props> = (props: Props) => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        auth.login(username, password).then(
            () => navigate('/')
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
                            <label htmlFor="username">Nazwa użytkownika: </label>
                            <input
                                data-e2e= "username_input"
                                id="username"
                                type="text"
                                required
                                className={styles.Input}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="password">Hasło: </label>
                            <input
                                data-e2e="password_input"
                                id="password"
                                type="password"
                                required
                                className={styles.Input}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button data-e2e="submit" type="submit" className={styles.Input}>Zaloguj</button>
                    </form>

                </Paper>
            </Center>
            <Space h="md"/>
            {error &&
                <Center>

                    <Notification onClose={() => {
                        setError(false)
                    }} color="red">
                        Błędna nazwa użytkownika lub hasło
                    </Notification>
                </Center>
            }
        </Container>
    )
};
