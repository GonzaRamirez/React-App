import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { db } from '../../Services/Firebase/index'
import FormUser from "../Form/Form"
import { useNavigate } from "react-router-dom"
import '../Checkout/Checkout.css'
import Swal from "sweetalert2"


const Checkout = () => {
    const [loading, setLoading] = useState(false)

    const { cart, total, clearCart } = useContext(CartContext)
    // eslint-disable-next-line
    const [personalData, setPersonalData] = useState(false)

    const [datosCompra, setDatosCompra] = useState({})

    const completoDatos = (name, surname, address, phone, email) => {
        setDatosCompra({ name, surname, address, phone, email })
        setPersonalData(true)
    }


    const navigate = useNavigate()

    const createOrder = async () => {
        setLoading(true)

        try {
            const Order = {
                buyer: datosCompra,
                items: cart,
                total: total
            }

            const batch = writeBatch(db)

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'products')


            const productsIncorporatedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const outOfStock = []

            const { docs } = productsIncorporatedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productIncorporatedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productIncorporatedToCart?.Quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')
                // eslint-disable-next-line
                const orderAdded = await addDoc(orderRef, Order)

                clearCart()

                setTimeout(() => {
                    navigate('/')
                }, 6000)
                Swal.fire({
                    title: "Gracias por su compra",
                    text: `Id de su orden de compra:  ${orderAdded.id}`,
                    icon: "success",
                    buttons: true,
                    dangerMode: true,
                })


            } else {
                Swal.fire({
                    title: "Productos fuera de stock",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,

                })
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    }

    if (loading) {
        return <h1>Estamos generando su pedido...</h1>
    }

    return (
        <div>
            <h1 className="mt-5">Datos para generar la orden de compra</h1>
            <FormUser completoDatos={completoDatos} />
            {personalData
                ? <button className="ButtonForm" onClick={createOrder}>Confirmar pedido</button>
                : ""}
        </div>
    )
}

export default Checkout