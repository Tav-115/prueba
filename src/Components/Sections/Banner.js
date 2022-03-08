const Banner = () => (
    <div className="main-banner img-container VerdeSalud diagonal">
      <div className="ed-grid lg-grid-6 ">
        <div className="lg-cols-4 lg-x-2 ">
            <img
            className="main-banner__img transp2"
            src="https://img.freepik.com/foto-gratis/enfermera-vacunando-paciente-masculino_23-2148981264.jpg" 
            alt="Banner"             
            />
          <div className="main-banner__data s-center medio">
            <p className="s-mb-0 t2">Inmunizar a la población es un desafio permanente</p>
            <p>Nuestro compromiso es con la salud</p><a className="button VerdeSaludClaro" href="https://bancos.salud.gob.ar/sites/default/files/2020-10/calendario-nacional-vacunacion-2020.pdf" target="_blank">Ver Calendario de vacunas</a>
          </div>
          <div className="main-banner__data s-center small">
            <p className="s-mb-0 t5">Inmunizar a la población es un desafio permanente</p>
            <h6>Nuestro compromiso es con la salud</h6><a className="button VerdeSaludClaro" href="https://bancos.salud.gob.ar/sites/default/files/2020-10/calendario-nacional-vacunacion-2020.pdf" target="_blank">Ver Calendario de vacunas</a>
          </div>
        </div>
      </div>
    </div>
  )
    
export default Banner