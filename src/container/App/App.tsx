import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from 'container/Main/Main'
import { useState } from 'react'

type ProductsInCart = {
    [id: number]: number
}

const App = () => {
    const [productsInCart, serProductsInCart] = useState<ProductsInCart>({
        1: 4,
        2: 1,
    })

    const addProductToCart = (id: number, count: number) => {
        serProductsInCart((prevState: ProductsInCart) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    const removeProductFromCart = (id: number) => {
        serProductsInCart((prevState: ProductsInCart) => {
            let prevProductsInCart = { ...prevState }
            delete prevProductsInCart[id]
            return prevProductsInCart
        })
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <button onClick={() => removeProductFromCart(1)}>
                Remuve Prodect
            </button>
            <Main
                addProductToCart={addProductToCart}
                productsInCart={productsInCart}
            />
        </StyledEngineProvider>
    )
}
export default App
