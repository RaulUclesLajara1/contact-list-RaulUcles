import { useEffect} from "react"
import ContactCard from "./ContactCard"
import { Link } from "react-router-dom"
import useGlobalReducer from "./Contexto"



const VistaContactos = () => {
    const {store , dispatch} = useGlobalReducer();
    useEffect(()=>{
        fetch("https://playground.4geeks.com/contact/agendas/rauulucless")
        .then(resp => resp.json())
        .then(data => 
            dispatch({type: 'Cargar', payload: data.contacts})    
        )

    },[]

    )
    const EliminarContacto = (id) => {
        fetch(`https://playground.4geeks.com/contact/agendas/rauulucless/contacts/${id}` ,
            {
                method:"DELETE"
            })
        .then(resp=>{
            if (resp.ok){
                dispatch({type:'Eliminar', payload: id})
            }
            else {
                console.log("Error")
            }
        })
    }
 
    
    


    return(
        <>
            <div className="container">
                <div className="row mb-3">
                    <div className="col-md-12 pt-4 d-flex justify-content-end">
                        <Link to="/AgregarContacto"><button className="btn btn-success">Añadir contacto</button></Link>
                    </div>
                </div>
            </div>

            {store.contactos.map((element, index) => (
            <ContactCard
                id = {element.id}
                key={index}
                nombre={element.name}
                telefono={element.phone}
                email={element.email}
                direccion={element.address}
                eliminar={EliminarContacto}

            />
))}
        
        
        </>
    )
}

export default VistaContactos