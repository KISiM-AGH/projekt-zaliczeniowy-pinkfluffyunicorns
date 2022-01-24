import React, {FormEvent, FunctionComponent, useState} from 'react';
import {Center, Container, Notification, Paper, Space} from "@mantine/core";
import {useNavigate} from "react-router-dom";
import auth from "../../Actions/auth";
import styles from "./Login.module.css";



interface Props {
}

function ErrorIcon() {
    return null;
}

export const Login: FunctionComponent<Props> = (props: Props) => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();     // Niezbedne by strona sie nie przeladowala!
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
                                id="password"
                                type="password"
                                required
                                className={styles.Input}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button type="submit" className={styles.Input}>Zaloguj</button>
                    </form>

                </Paper>
            </Center>
            <Space h="md"/>
            {error &&
                <Center>

                    <Notification icon={<ErrorIcon/>} onClose={() => {
                        setError(false)
                    }} color="red">
                        Błędna nazwa użytkownika lub hasło
                    </Notification>
                </Center>
            }
        </Container>
    )
};
