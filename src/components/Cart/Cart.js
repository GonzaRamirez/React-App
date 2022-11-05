import './Cart.css'
import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)  

    if(totalQuantity === 0) {
        return (
            <div>      
                <h1 className='CardCart'>Tu carrito esta vacio</h1>

            </div>
        )
        
    }
   

    return (     
        <div className='ProductsContainer'>
            <h1 className='mt-5'>Carrito de compras</h1>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <div className='PriceTotal'>
                <p>Total: ${total}</p>
            </div>
            <div className='BtnCart'>
                <Link to='/' className='btn btn-primary m-4'>Seguir Comprando</Link>
                <button className="btn btn-danger m-4" onClick={() => {clearCart()
                    Swal.fire({
                        title: "Carrito Vacio",
                        icon: "success",
                        buttons: true,
                        dangerMode: true,
                    
                    })
                    }}
                 >Vaciar carrito
                </button>
                  
                <Link to='/checkout' className='btn btn-success m-4'>Generar pedido</Link>
            </div>
        </div>
    )
}
export default Cart 