import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductById } from '../../asyncMook'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams, useNavigate } from 'react-router-dom'

const ItemDetailContainer = ({ setCart}) => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { idProduct } = useParams()

    const navigate = useNavigate()
    

    useEffect(() => {
        getProductById(idProduct).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
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