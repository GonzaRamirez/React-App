import { useState, useEffect, createContext, useContext } from "react"

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const totalQty = getQuantity()
        setTotalQuantity(totalQty)
    }, [cart]) //eslint-disable-line

    useEffect(() => {
        const total = getTotal()
        setTotal(total)
      }, [cart]) //eslint-disable-line

    const addProduct = (productToAdd, quantity) => {
        if(!isInCart(productToAdd.id)) {
            productToAdd.quantity = quantity
            setCart([...cart, productToAdd])
        } else {
            const cartUpdated = cart.map(prod => {
                if(prod.id === productToAdd.id) {
                    const productUpdated = {
                        ...prod, quantity: quantity + prod.quantity
                    }

                    return productUpdated
                } else {
                    return prod
                }
            })

            setCart(cartUpdated)
        }
    }

    const isInCart = (id) => {
        return cart.find(product => product.id === id)
    }

    
    const getQuantity = () => {
        let accu = 0
        
        cart.forEach(prod => {
            accu += prod.quantity
        })
        
        return accu
    }
    
    const getProductQuantity = (id) => {
        const product = cart.find(prod => prod.id === id)
        
        return product?.quantity
    }
    const getTotal = () => {
        let total = 0
        
        cart.forEach(prod => {
            total += prod.quantity * prod.price
        })
        
        return total
    }
    
    const removeProduct = (id) => {
        const cartWithoutProduct = cart.filter(prod => prod.id !== id)
        setCart(cartWithoutProduct)
    }

    
    const clearCart = () => {
        setCart([])
    }
    
    
    return (
        <CartContext.Provider value={{ cart, totalQuantity, getQuantity, addProduct, getProductQuantity, getTotal, removeProduct, isInCart, total, clearCart, }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}