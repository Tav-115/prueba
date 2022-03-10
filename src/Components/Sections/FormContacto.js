
const FormContact = () => (
    <div className="form">
        <form className="ed-container m-40 lg-to-center l-block" action="Menv">
            <div className="ed-item full form-item">
                <label>Nombre</label>
                <input 
                type="text" 
                required
                className="VerdeSaludClaro" autoFocus/>
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
                required
                className="VerdeSaludClaro" 
                placeholder="Nombre@gmail.com..."/>
              </div>
              <div className="ed-item full form__item">
                <label>Teléfono</label>
                <input 
                type="tel" 
                required
                placeholder="0343..."
                className="VerdeSaludClaro"/>
              </div>
              <div className="ed-item form__item ">
                <textarea placeholder="Escriba su mensaje"></textarea>
              </div>
              <div className="ed-item form__item">
                 
                <input className="button full VerdeSaludClaro" 
                type="submit" value="Enviar" onclick="location.href='Menv';"/>
                
              </div>
              
        </form>
    </div>
        

)

export default FormContact