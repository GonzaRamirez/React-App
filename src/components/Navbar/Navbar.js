import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import Logo from '../LogoPage/LogoPage'
import { Link } from 'react-router-dom'



const Navbar = () => {
    return(
        <nav className='Navbar-nav'>
            <Logo />
            <Link className='Titulo' to='/'>
                <h1>GR STORE</h1>
            </Link>

            <div className='LinkCat'>
                <Link className='LinkItem' to={'/category/Smartphone'}>Smartphone</Link>
                <Link className='LinkItem'to={'/category/Macbook'}>Macbook</Link>
                <Link className='LinkItem'to={'/category/Ipad'}>Ipad</Link>

            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar