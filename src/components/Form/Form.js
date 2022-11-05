import Swal from "sweetalert2";
import { useState, createContext } from "react";
import '../Form/Form.css'


export const FormData = createContext({
    name:"",
    surname:"",
    address:"",
    phone:"",
    email:""
})


const ClientForm = ({completoDatos}) => {
    
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [checkEmail, setCheckEmail] = useState("");
    const [phone, setPhone] = useState("");




const submit = (e) => {
    e.preventDefault ();
    if (!name || !email || !phone || !address)
        {
            Swal.fire({
                title: "Completa tus datos",
                icon: "warning",
                buttons: true,
                dangerMode: true,
        
            })
        }
        // eslint-disable-next-line
        else if (email != checkEmail && email && checkEmail) {
            Swal.fire({
            title: "El email y su confirmacion deben ser identicos",
            html: "Intente de nuevo",
            buttons: true,
            dangerMode: true,
        })
    }

    else {

        Swal.fire({
            title: "Sus datos fueron almacenados correctamente",
            icon: "success",
            buttons: true,
        
        })
    completoDatos(
        name,
        surname,
        address,
        phone,
        email
    )
    }
    }



    return (
        <form>

            <div className='Form mt-5' >
                <input  value={name} onChange={(e) => setName(e.target.value)} type="text"   className="form-input"   placeholder="Nombre" required />
                <input  value={surname} onChange={(e) => setSurname(e.target.value)} type="text"   className="form-input"   placeholder="Apellido" required/>
                <input value={address}onChange={(e) => setAddress(e.target.value)}type="text"   className="form-input"   placeholder="Dirección"required />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email"  className="form-input"   placeholder="Email" required/>
                <input value={checkEmail} onChange={(e) => setCheckEmail(e.target.value)} type="Confirme Email"  className="form-input"   placeholder="Email" required/>
                <input value={phone}onChange={(e) => setPhone(e.target.value)} type="number" className="form-input"   placeholder="Teléfono"required />
            </div>
            <button  className='ButtonForm' onClick = {submit}
            >Validate data</button>
        
            </form>
)
}

            
export default ClientForm