
const FormContact = () => (
    <div className="form">
        <form className="ed-container m-40 lg-to-center l-block ">
            <div className="ed-item full form-item">
                <label>Nombre</label>
                <input 
                type="text" 
                required
                className="VerdeSaludClaro"/>
              </div>
              <div className="ed-item full form-item ">
                <label>Institución</label>
                <input 
                type="text" 
                className="VerdeSaludClaro"/>
              </div>
              <div className="ed-item full form-item">
                <label>E-mail</label>
                <input 
                type="email" 
                className="VerdeSaludClaro" 
                placeholder="Nombre@correo.com..."/>
              </div>
              <div className="ed-item full form__item">
                <label>Telefono</label>
                <input 
                type="tel" 
                placeholder="0343..."
                className="VerdeSaludClaro"/>
              </div>
              <div className="ed-item form__item ">
                <textarea placeholder="Escriba su mensaje"></textarea>
              </div>
              <div className="ed-item form__item">
                <input className="button full small VerdeSaludClaro" 
                type="submit" value="Enviar"/>
              </div>
                 
        </form>
    </div>
        

)

export default FormContact