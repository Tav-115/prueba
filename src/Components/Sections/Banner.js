const Banner = () => (
    <div className="main-banner img-container VerdeSalud diagonal">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
            <img
            className="main-banner__img transp2"
            src="https://image.freepik.com/foto-gratis/close-up-medico-varon-vacunando-nina_23-2148755615.jpg" 
            alt="Banner" 
            />
          <div className="main-banner__data s-center">
            <p className="s-mb-0 t2">Inmunizar a la población es un desafio permanente</p>
            <p>Nuestro compromiso es con la salud</p><a className="button VerdeSaludClaro" href="https://bancos.salud.gob.ar/sites/default/files/2020-10/calendario-nacional-vacunacion-2020.pdf" target="_blank">Ver Calendario</a>
          </div>
        </div>
      </div>
    </div>
  )
    
export default Banner