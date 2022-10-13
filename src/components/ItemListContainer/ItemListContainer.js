import './ItemListContainer.css'
import { useState,useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMook"
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'
/* const ItemListContainer = ({ greeting }) => {
    return <h1 className='mt-5'>{greeting}</h1>
} */

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {idCategory} = useParams ()

    useEffect(() => {
        setLoading(true)

        const asyncFunction = idCategory ? getProductsByCategory : getProducts
       
        asyncFunction(idCategory).then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })  
    }, [idCategory])

    /* console.log(products)
    const productsMapped = products.map(prod => <li>{prod.name}</li>)
    console.log(productsMapped) */
    if(loading){
        return <h1>Loading...</h1>
    }
    return (
        <div onClick={() => console.log('click en itemlistcontainer')}>
            {/* <button onClick={(e) => console.log(e)}>boton</button> */}
            <ItemList products={products} />
        </div>
    )
}
export default ItemListContainer