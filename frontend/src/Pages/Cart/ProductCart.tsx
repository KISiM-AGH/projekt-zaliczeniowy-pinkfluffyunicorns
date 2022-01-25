import React, {FunctionComponent} from "react"
import { Card, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';

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
        <Button data-e2e="removeFromCart" variant="light" color="#ff4d4d" fullWidth style={{marginTop: 14}} onClick={() => props.delete(props.id)}>
            Usuń produkt
        </Button>
    </Card>
}

export default ProductCart
