import React, {FunctionComponent} from "react"
import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';
import {useCookies} from "@react-smart/react-cookie-service";
import product, {Product} from "../../Actions/products"

interface Props {
    id: number,
    productName : string,
    description: string,
    price : number,
    delete : Function
}

const ProductCart: FunctionComponent<Props> = (props: Props) => {
    const theme = useMantineTheme();

    const secondaryColor = theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[7];

    return <Card style={{ background: '#ffccff'}}>
        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm}}>
            <Text weight={500}>{props.productName}</Text>
            <Badge color="pink" variant="light">
                {props.price} $
            </Badge>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
            {props.description}
        </Text>
        <Button variant="light" color="#ff4d4d" fullWidth style={{marginTop: 14}} onClick={() => props.delete(props.id)}>
            Usuń produkt
        </Button>
    </Card>
}

export default ProductCart
