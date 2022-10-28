import './CartWidget.css'
import cart from './assets/cart.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)



    return (
        <div to='/cart'  className="CartWidget">
            <img src={cart} alt= 'cart' className='CartImg mt-4'/>
            {totalQuantity}
        </div>
    )
}

export default CartWidget