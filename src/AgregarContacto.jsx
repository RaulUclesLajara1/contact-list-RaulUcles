import { Link, useParams } from "react-router-dom"
import { useState } from "react"
const AgregarContacto = () => {
        const [formData, setFormData] = useState({
            email: "",
            nombre: "",
            telefono: "",
            direccion: ""
  })
    const handleChange = (e) => {
        const { id, value } = e.target
        setFormData((prev) => ({
        ...prev,
        [id.toLowerCase()]: value 
    }))

  }
  
  const {id} = useParams()
    return(
        <>
        <form>
        <div className="container">
            <div className="row">
                <div className="col-md-10">
                    <div className="mb-3">
                        <label for="Email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="Email" value={formData.email} onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label for="Nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="Nombre" value={formData.nombre} onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label for="Telefono" className="form-label">Telefono</label>
                        <input type="text" className="form-control" id="Telefono" value={formData.telefono} onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label for="Direccion" className="form-label">Direccion</label>
                        <input type="text" className="form-control" id="Direccion" value={formData.direccion} onChange={handleChange}/>
                    </div>
                    <button 
                        type="button" 
                        className="btn btn-success me-3"
                        onClick={id? () => {
                            fetch(`https://playground.4geeks.com/contact/agendas/rauulucless/contacts/${id}`, {
                             method:"PUT",
                             headers: { "Content-Type": "application/json" },
                             body: JSON.stringify({
                                 name: formData.nombre,
                                 email: formData.email,
                                 phone: formData.telefono,
                                 address: formData.direccion
                             })
                            })
                            .then(resp => resp.ok 
                                ? alert("Contacto editado")
                                : alert("Error")
                            )
                            .catch(err => console.error(err))
                            
                        }:() => {
                            fetch("https://playground.4geeks.com/contact/agendas/rauulucless/contacts", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                name: formData.nombre,
                                email: formData.email,
                                phone: formData.telefono,
                                address: formData.direccion
                            })
                            })
                            .then(resp => resp.ok 
                                ? alert("Contacto añadido") 
                                : alert("Error"))
                            .catch(err => console.error(err))}
                    }
                        >
                        {id ? "Editar" : "Añadir"} 
                        </button>
                    <Link to="/"><button className="btn btn-secondary">Volver a la vista principal</button></Link>



                </div>
            </div>
        </div>
        </form>


        </>
    )
}

export default AgregarContacto