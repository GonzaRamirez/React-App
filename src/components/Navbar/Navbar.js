import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import Logo from '../LogoPage/LogoPage'
import { NavLink } from 'react-router-dom'



const Navbar = () => {
    return(
        <nav className='Navbar-nav'>
            <Logo />
            <NavLink className='Titulo' to='/'>
                <h1>GR STORE</h1>
            </NavLink>

            <div className='LinkCat'>
                <NavLink className='LinkItem' to={'/category/Iphone'}>Iphone</NavLink>
                <NavLink className='LinkItem'to={'/category/Macbook'}>Macbook</NavLink>
                <NavLink className='LinkItem'to={'/category/Ipad'}>Ipad</NavLink>

            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar