import React, {FunctionComponent} from "react"
import { Card, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';
import {useCookies} from "@react-smart/react-cookie-service";
import product from "../../Actions/products"

interface Props {
    id: number,
    productName : string,
    description: string,
    price : number
}

const ProductCart: FunctionComponent<Props> = (props: Props) => {
    const { check } = useCookies();
    const theme = useMantineTheme();

    const toCart = (id : number) => {
        product.addToCart(id)
    }

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
        {check('isLogged') &&
            <Button data-e2e="addToCart" variant="light" color="blue" fullWidth style={{marginTop: 14}} onClick={() => toCart(props.id)}>
                Dodaj do koszyka
            </Button>
        }

    </Card>
}

export default ProductCart