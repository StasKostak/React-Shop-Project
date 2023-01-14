import { Grid, Typography } from '@mui/material'
import CartProductList from 'components/CartProductList/CartProductList'
import CartProductsListItemExtended from 'components/CartProductList/CartProductsListItemExtended'
import CartTotal from 'components/CartTotal/CartTotal'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    removeProductFromCart: (id: number) => void
}

const CartPage = ({ productsInCart, removeProductFromCart }: Props) => {
    return (
        <div>
            <Typography
                variant="h4"
                style={{
                    margin: ' 30px 0px',
                }}
            >
                Cart
            </Typography>
            <Grid container spacing={4}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductsListItemExtended}
                    removeProductFromCart={removeProductFromCart}
                />
            </Grid>
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}

export default CartPage
