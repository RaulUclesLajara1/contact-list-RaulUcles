import { useEffect, useState } from "react"
import ContactCard from "./ContactCard"

const VistaContactos = () => {
    const [contactos,setContactos] = useState([])
    useEffect(()=>{
        fetch("https://playground.4geeks.com/contact/agendas/rauulucless")
        .then(resp => resp.json())
        .then(data => 
            setContactos(data.contacts)    
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
            setContactos(prev => prev.filter(contacto => contacto.id !== id))
            }
            else {
                console.log("Error")
            }
        })
        
    }

    return(
        <>
            {contactos.map((element, index) => (
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