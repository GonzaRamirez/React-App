import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'


const ItemDetail = ({ id, name, img, category, description, price, stock }) => {


    
    const { addProduct, isInCart, getProductQuantity } = useContext(CartContext)

   
    const handleOnAdd = (Quantity) => {
        const productToAdd = {
            id, 
            name,
            img, 
            price, 
            description
        }

                
        const showingAlert = withReactContent(Swal)
        showingAlert.fire({
        position: 'top-end',
        icon: 'success',
        title: <strong>Producto Agregado correctamente!</strong>,
        html: <i> {name} se encuentra en el Carrito</i>,
        showConfirmButton: false,
        timer: 2500
      })
        
        addProduct(productToAdd, Quantity)
    }

    const quantityAdded = getProductQuantity(id)



    return (
        <article className="CardItem">
            <header className="ContenidoCard">
                <h2 className="NameHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="Img"/>
            </picture>
                <div>  
                    <p className="Info">
                        {category}
                    </p>
                    <p className="Info">
                        {description}
                    </p>
                    <p className="Info">
                        Stock disponible: {stock} unidades
                    </p>
                    <p className="InfoPrice">
                        ${price}
                    </p> 
                </div>           
            <footer className='ItemFooter'>
            { stock !== 0 ? <ItemCount onAdd={handleOnAdd} stock={stock} initial={quantityAdded} />: <p>No hay stock</p>}
                {isInCart(id) && <Link to='/cart' className='Button mt-4'>Finalizar compra</Link>}
            
            </footer>
        </article>
    )
}

export default ItemDetail