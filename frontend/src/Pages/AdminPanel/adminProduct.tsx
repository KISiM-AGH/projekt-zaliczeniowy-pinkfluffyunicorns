import React, {FunctionComponent} from "react"
import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';
import {useCookies} from "@react-smart/react-cookie-service";
import product, {Product} from "../../Actions/products"
import {useNavigate} from "react-router-dom";

interface Props {
    id: number,
    productName : string,
    description: string,
    price : number
}

const AdminProduct: FunctionComponent<Props> = (props: Props) => {
    const { check } = useCookies();
    const theme = useMantineTheme();
    const navigate = useNavigate();

    const editProduct = (id : number) => {
        navigate('/')
    }

    const deleteProduct = (id : number) => {
        product.deleteProduct(id)
    }

    const secondaryColor = theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[7];

    return <Card style={{ background: '#ffccff'}}>
        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm}}>
            <Text weight={500}>{props.productName}</Text>
            <Badge color="pink" variant="light">
                {/*{props.id}*/}
                {props.price} $
            </Badge>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
            {props.description}
        </Text>
        <Button variant="light" color="blue" fullWidth style={{marginTop: 14}} onClick={() => editProduct(props.id)}>
            Edytuj produkt
        </Button>
        <Button variant="light" color="blue" fullWidth style={{marginTop: 14}} onClick={() => deleteProduct(props.id)}>
            Usuń produkt
        </Button>


    </Card>
}

export default AdminProduct