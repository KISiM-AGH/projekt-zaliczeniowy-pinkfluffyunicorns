import auth from "../../Actions/auth";
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {Center, Container, Space} from "@mantine/core";



export const Logout = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState("Wylogowywanie");
    auth.logout().then(() => {
        setMessage("Wylogowano");
        setTimeout(() => navigate('/'), 5000)
    }).catch(() => {})

    return <Container>
        <Space h="md"/>
        <Center>
            <div>
                {message}
            </div>
        </Center>
    </Container>

}
