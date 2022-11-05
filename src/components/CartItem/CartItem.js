import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './CartItem.css'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'




const CartItem = ({ id, img, name, quantity, price }) => {
    const { removeProduct } = useContext(CartContext)

    const handleRemove = (id) => {
        removeProduct(id)

        const showingAlert = withReactContent(Swal)
        showingAlert.fire({
        position: 'top-end',
        icon: 'warning',
        title: <strong>Producto eliminado del carrito!</strong>,
        html: <i> {name} se elimino del Carrito</i>,
        showConfirmButton: false,
        timer: 2500
      })
    }
    return (
        // eslint-disable-next-line
        <article className='CardCartItem'>
            <div> <img className='CardImg' src={img} alt=''></img> </div>
            <header>
                <h2 className="NameCartItem">
                    {name}
                </h2>
            </header>
            <section className='ContainerItem'>
                <p className="InfoCart">
                    Cantidad: {quantity}
                </p>
                <p className="PriceItem">
                    Precio x Unidad: ${price}
                </p>
            </section>           
            <footer className='PriceTotalContainer'>
                 <p className="PriceSubTotal">
                     Subtotal: ${price * quantity}
                 </p>
                    <div>
                        <button className='btn btn-danger' onClick={() => handleRemove(id)}>X</button>
                    </div>   
            </footer>
        </article>
    )
}

export default CartItem