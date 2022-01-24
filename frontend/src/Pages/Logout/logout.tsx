import auth from "../../Actions/auth";
import {useNavigate} from "react-router-dom";
import React, {useEffect} from "react";
import {Center, Container, Space} from "@mantine/core";

class Props {
}

export const Logout= (props : Props) => {
    // const navigate = useNavigate();
    // auth.logout().then(
    //     () => navigate('/')
    // )
    //
    // return <h1> Wylogowywanie</h1>
    useEffect(() => {
        const timeout = setTimeout(() => {
            return <h1> Wylogowywanie</h1>
        }, 500);
        //return () => clearTimeout(timeout);
    }, [])

    return <Container>
        <Space h="md"/>
        <Center>
            <div>
                Wylogowano...
            </div>
        </Center>
    </Container>


}
