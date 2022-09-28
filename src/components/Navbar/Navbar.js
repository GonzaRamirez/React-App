import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import Logo from '../LogoPage/LogoPage'



const Navbar = () => {
    return(
        <nav className='Navbar-nav'>
            <Logo />
            <h1 className='Titulo mt-3'>GR STORE</h1>
            <div className='Button'>
                <button className='btn btn-info'>Home</button>
                <button className='btn btn-info'>Productos</button>
                <button className='btn btn-info'>Contacto</button>

            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar