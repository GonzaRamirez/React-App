import './Footer.css'
import Logo from '../LogoPage/assets/gr.png'
import { Link } from 'react-router-dom'


const Footer = () => {  
    return (
<footer className="Footer">
        <div>
            <div className="row justify-content-evenly ">
                <div className="d-flex flex-column  col-4 justify-center mt-4">
                    <h2 className='fw-bolder'> GR STORE </h2>
                    <p className='Slogan'> Somos una empresa que se dedica a la importacion de dispositivos moviles</p>
                </div>
                <div className=' col-4 justify-center'>
                <Link to = '/'> <img className='logo' width={200}  src={Logo} alt='' /> </Link>
                </div>
                <div className=' col-4 justify-center align-center mt-5 fw-bolder'> 
                    <p>Alvear 5194 | Santa Fe, Argentina<br></br>
                        Telefono: 3424066543<br></br>
                    </p>  
                </div>
            </div>
        </div>
</footer> 
)}



export default Footer