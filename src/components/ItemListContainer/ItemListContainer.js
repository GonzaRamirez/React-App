import './ItemListContainer.css'
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../Services/Firebase'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { idCategory } = useParams()

    /* FUNCION USE EFFECT */
    useEffect(() => {
        setLoading(true)

        const collectionRef = idCategory
            ? query(collection(db, 'Products'), where('category', '==', idCategory))
            : collection(db, 'Products')



        getDocs(collectionRef).then(response => {
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                console.log(data)

                return { id: doc.id, ...data }

            })


            setProducts(productsAdapted)


        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })


    }, [idCategory])


    if (loading) {
        return <h1> Loading...</h1>
    }
    return (
        <div >
            <ItemList products={products} />
        </div>
    )
}
export default ItemListContainer