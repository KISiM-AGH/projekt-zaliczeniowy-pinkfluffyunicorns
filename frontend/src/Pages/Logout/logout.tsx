import auth from "../../Actions/auth";
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {Center, Container, Space} from "@mantine/core";



export const Logout = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState("Wylogowywanie");

    auth.logout().then(() => navigate('/'));

    return <Container>
        <Space h="md"/>
        <Center>
            <div>
              {message}
            </div>
        </Center>
    </Container>
}
