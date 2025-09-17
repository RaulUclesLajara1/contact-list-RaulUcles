const ContactCard = ({ id, nombre, direccion, telefono, email, eliminar }) => {

  return (
    <div className="container py-4">
      <div className="card shadow-sm">
        <div className="card-body d-flex align-items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSYaPnbTNaUm_8C_9JdFV3HLuDaD1eB1T6vwQajvuX2CQoeL6ZpjOF7XlRlsxocNBEyRdJPC-9LQlzOG9OoV6fbqKCuk3fY1xfcncK-6qEPe954QPHIpWPMB7e-qNDjUok-KtluWtoRRmpj"
            alt="Foto"
            className="rounded-circle me-3"
            width="80"
            height="80"
          />

          <div className="flex-grow-1">
            <h5 className="mb-1">{nombre}</h5>
            <p className="mb-1">
              <i className="fa-solid fa-location-dot me-2 text-secondary"></i>
              {direccion}
            </p>
            <p className="mb-1">
              <i className="fa-solid fa-phone me-2 text-secondary"></i>
              {telefono}
            </p>
            <p className="mb-0">
              <i className="fa-solid fa-envelope me-2 text-secondary"></i>
              {email}
            </p>
          </div>

          
          <div className="ms-3">
            <button className="btn btn-secondary btn-sm me-2">
              <i className="fa-solid fa-pen"></i>
            </button>
            <button className="btn btn-danger btn-sm" onClick={()=>eliminar(id)}>
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
