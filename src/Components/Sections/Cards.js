    const Card = () => (
    <div className="m-60 lg-to-center l-block">
        <article className="s-shadow-bottom">
            {/* <!--Contenedor de la imagen--> */}
            <div className="circle ">
                <img src="https://images.pexels.com/photos/5863400/pexels-photo-5863400.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
            </div>
            {/* <!--Contenido--> */}
            <div className="s-bg-white s-pxy-2 ">
                <h3>Función</h3>
                <p className="s-mb-0">El Programa Ampliado de Inmunizaciones (PAI) asegura y distribuye en forma oportuna la cantidad de biológicos y descartables en todos los servicios de salud de la provincia.

    El trabajo está enfocado en emplear también diferentes estrategias de vacunación en las zonas donde no hay fácil accesibilidad a los servicios de salud.

    La población se vacuna en hospitales y centros de salud. Y en los lugares alejados de efectores públicos, se realizan actividades previamente programadas para lograr coberturas óptimas en toda la población.

    El calendario nacional obligatorio de vacunaciones es una herramienta de salud y prevención de enfermedades. A la fecha existen 19 vacunas gratuitas y obligatorias que la integran.
    </p>
            </div>
            <footer className="s-cross-center s-bg-grey s-pxy-2 s-radius-br s-radius-bl">
                {/* <!--Define el ancho máximo de la imagen--> */}
                <div className="s-10 s-mr-1">
                {/* <!--Contenedor de la imagen--> */}
                <div className="circle ">
                    <img src="https://images.pexels.com/photos/194094/pexels-photo-194094.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                </div>
                {/* <!--Profesor--> */}
                </div>
                <p className="s-mb-0">Jefe PAI: Lic. Claudio Niz</p>
                {/* <!--Boton--> */}
                <div className="button s-to-right VerdeSaludClaro"><a href="/ContactUs" className="colorB">Contacto</a></div>
            </footer>
        </article>
    </div>
    )

    export default Card