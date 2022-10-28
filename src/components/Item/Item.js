import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, img, price }) => {


    return (
        <article className="CardItem">
            <header className="ContenidoCard">
                <h2 className="ItemName">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ImgItem"/>
            </picture>
            <section>
                <p className="Precio">
                    ${price}
                </p>
            </section>           
            <footer className="Detalle">
               <Link to={`/detail/${id}`}>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item