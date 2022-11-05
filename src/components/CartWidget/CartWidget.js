import './CartWidget.css'
import cart from './assets/cart.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    const navigate = useNavigate()

    return (
        <button to='/cart'  className="CartWidget" onClick={() => navigate('/cart')}>
            <img src={cart} alt= 'cart' className='CartImg mt-4'/>
            {totalQuantity}
        </button>
    )
}

export default CartWidget