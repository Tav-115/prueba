
const FormContact = () => (
    <div classNameName="">
        <form classNameName="">
            <div classNameName="ed-item full form-item">
                <label>Nombre</label>
                <input 
                type="text" 
                required
                classNameName="VerdeSaludClaro"/>
              </div>
              <div classNameName="ed-item full form-item ">
                <label>Institución</label>
                <input 
                type="text" 
                classNameName="VerdeSaludClaro"/>
              </div>
              <div classNameName="ed-item full form-item">
                <label>E-mail</label>
                <input 
                type="email" 
                classNameName="VerdeSaludClaro" 
                placeholder="Nombre@correo.com..."/>
              </div>
              <div classNameName="ed-item full form__item">
                <label>Telefono</label>
                <input 
                type="tel" 
                placeholder="0343..."
                classNameName="VerdeSaludClaro"/>
              </div>
              <div classNameName="ed-item form__item ">
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