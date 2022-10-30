import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
/* import { getProductById } from '../../asyncMook' */
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams, useNavigate } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../Services/Firebase'

const ItemDetailContainer = ({ setCart}) => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { idProduct } = useParams()

    const navigate = useNavigate()
    

    useEffect(() => {

        const docRef= doc(db, 'Products', idProduct)

        getDoc(docRef).then(response =>{
            const data = response.data()
            const productAdapted = { id: response.id, ...data}
            setProduct(productAdapted)
        }).finally(() => {
            setLoading(false)
        })


     /*    getProductById(idProduct).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        }) */
    }, [idProduct])

    if(loading) {
        return <h1>Loading...</h1>
    }

    return(
        <div className='ItemDetailContainer' >
            <ItemDetail  {...product} />
            <button className='Button mb-5' onClick={() => navigate(-1)}>Atrás</button>
        </div>
    )
}

export default ItemDetailContainer