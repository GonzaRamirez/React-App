import './ItemCount.css'
import { useState } from 'react'
import Swal from 'sweetalert2'

const ItemCount = ({stock = 0, initial = 1, onAdd})=> {
   const [Quantity, setQuantity] = useState(initial)

   const increment = () => {
       if(Quantity < stock) {
           setQuantity(Quantity+1)
       }
       else{
        Swal.fire({
            title: "No queda mas stock de este producto",
            icon: "warning",
            buttons: true,
        })
       }
   }

   const decrement = () => {
       if(Quantity > 1) {
           setQuantity(Quantity - 1)
       }     
   }

   return(
       <div className='Counter'>          
            <div className='CounterDiv'>
                <button className="Button" onClick={decrement}>-</button>
                <h4 className='Numero'>{Quantity}</h4>
                <button className="Button" onClick={increment}>+</button>
            </div>
            <div>
                <button className="Button" onClick={() => {onAdd(Quantity)
                
                Swal.fire({
                    title: "Producto Agregado correctamente",
                    icon: "success",
                    buttons: true,
                })
            
                }}>                  
                    
                    Agregar al carrito</button>
            </div>
       </div>
   )

}
export default ItemCount