import { NavLink } from "react-router-dom"
import Slider from "./slider"
const CardsHome = () => (
<div  className="ed-grid lg-grid-1">
  <div className="ed-grid lg-grid-2 s-grid-1 gap-1 l-block m-grid-2 row-gap">
              {/* Video Small */}
                  <div className="card small">
                    <div className="img-container m-cen s-ratio-16-9 s-radius-tr s-radius-tl">
                    <iframe width="100%" height="200" src="https://www.youtube.com/embed/M80rGk2YDjI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                    </div>
                  </div> 
              
                                  <div className="card oF">
                <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
                    <img src="https://drive.google.com/uc?export=download&id=1VkP35CaSoccyYFqjbMjuzquwPefzIbCW" /></div>
                <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">               
                  <div className="s-mb-2 s-main-center card__teachers">                 
                  </div>
                  <div className="s-main-center"><a className="button VerdeSaludClaro button--tiny" href="Camp">Campaña Nacional de Seguimiento 2022</a></div>
                </div>
              </div>


              <div className="card "> <div ><h2 className="atento"> Novedades</h2></div>
                  <div className="img-container"><div className="slider--btn slider--btn--right" id="btn--right">&#62;</div>
        <div className="slider--btn slider--btn--left" id="btn--left">&#60;</div>
                  <Slider/>
                  </div> 
              </div>

                  <div className="card">
                <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
                    <img src="https://cdn.pixabay.com/photo/2019/01/22/10/58/pixel-cells-3947916_960_720.png"/></div>
                <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">               
                  <div className="s-mb-2 s-main-center card__teachers">                 
                  </div>
                  <div className="s-main-center">
                    < NavLink to="/Recursos" exact="true"
                    className="button VerdeSaludClaro button--tiny"
                    >Recursos</NavLink></div>
                </div>
              </div>
              
                            
              <div className="card">
                <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
                    <img src="https://img.freepik.com/foto-gratis/mujer-joven-que-estudia-casa-cursos-linea-o-informacion-gratuita-ella-misma-tomando-notas_155003-34075.jpg"/></div>
                <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">               
                  <div className="s-mb-2 s-main-center card__teachers">                 
                  </div>
                  <div className="s-main-center"><a className="button VerdeSaludClaro button--tiny" href="Capac">Capacitación y Docencia</a></div>
                </div>
              </div>


              <div className="card">
                <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
                    <img src="https://img.freepik.com/vector-gratis/nuevo-banner-coronavirus-covid-19-celulas-virales_1017-24559.jpg"/></div>
                <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">               
                  <div className="s-mb-2 s-main-center card__teachers">                 
                  </div>
                  <div className="s-main-center"><a className="button VerdeSaludClaro button--tiny" href="Covid">Covid</a></div>
                </div>
              </div>

              <div className="card">
                <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
                    <img src="https://cdn.pixabay.com/photo/2017/06/10/07/18/list-2389219_960_720.png"/></div>
                <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">               
                  <div className="s-mb-2 s-main-center card__teachers">                 
                  </div>
                  <div className="s-main-center"><a className="button VerdeSaludClaro button--tiny" href="Activ">Actividades PAI</a></div>
                </div>
              </div>

              {/* Videos */}
              

             
                {/* Videos lavado de manos small */} 
                <h2 className="ancho small center "> Videos DiCEI </h2> 
                <div className="card small">
                <div className="img-container m-cen s-ratio-16-9 s-radius-tr s-radius-tl">
                <iframe width="100%" height="200" src="https://www.youtube.com/embed/SZD1PRZ8jng" title="YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                </div>
            </div> 
            <div className="card small">
                <div className="img-container m-cen s-ratio-16-9 s-radius-tr s-radius-tl">
                <iframe width="100%" height="200" src="https://www.youtube.com/embed/jyfqJRs1ucY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                </div>
            </div> 
            <div className="card small">
                <div className="img-container m-cen s-ratio-16-9 s-radius-tr s-radius-tl">
                <iframe width="100%" height="200" src="https://www.youtube.com/embed/SFSk1BR2bPk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                </div>
            </div> 
            <div className="card small">
                <div className="img-container m-cen s-ratio-16-9 s-radius-tr s-radius-tl">
                <iframe width="100%" height="200" src="https://www.youtube.com/embed/dxjRRPiJfNs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                </div>
            </div> 
            <div className="card small">
                <div className="img-container m-cen s-ratio-16-9 s-radius-tr s-radius-tl">
                <iframe width="100%" height="200" src="https://www.youtube.com/embed/aDUPrzBdIkQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                </div>
            </div> 
            <div className="card small">
                <div className="img-container m-cen s-ratio-16-9 s-radius-tr s-radius-tl">
                <iframe width="100%" height="200" src="https://www.youtube.com/embed/V15iMEDVQ0M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                </div>
            </div> 

              <h3 className="small center"> Feliz Día </h3>
            <div className="card small">
                <div className="img-container m-cen s-ratio-16-9 s-radius-tr s-radius-tl">
                <iframe width="100%" height="200" src="https://www.youtube.com/embed/iw6QMKwx204" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                </div>
                </div> 

              </div>

              <h3 className="medio center"> Vida Útil de las Vacunas</h3>
            <div className="medio ed-grid">
                <div className=" s-radius-tl center">
                <iframe width="60%" height="270" src="https://www.youtube.com/embed/M80rGk2YDjI" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                </div>
            </div>
            
            <h3 className="medio center"> Videos DiCEI </h3>
            <div className="medio ed-grid s-grid-2 lg-grid-2 xl-grid-2">
                {/* Videos lavado de manos */}
                <div className=" s-radius-tr s-radius-tl">
                <iframe width="100%" height="270" src="https://www.youtube.com/embed/SZD1PRZ8jng" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe> 
                </div>
                <div className=" s-radius-tr s-radius-tl">
                <iframe width="100%" height="270" src="https://www.youtube.com/embed/jyfqJRs1ucY" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe> 
                </div>
                <div className=" s-radius-tr s-radius-tl">
                <iframe width="100%" height="270" src="https://www.youtube.com/embed/SFSk1BR2bPk" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe> 
                </div>
                <div className=" s-radius-tr s-radius-tl">
                <iframe width="100%" height="270" src="https://www.youtube.com/embed/dxjRRPiJfNs" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe> 
                </div>
                <div className=" s-radius-tr s-radius-tl">
                <iframe width="100%" height="270" src="https://www.youtube.com/embed/aDUPrzBdIkQ" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe> 
                </div>
                <div className=" s-radius-tr s-radius-tl">
                <iframe width="100%" height="270" src="https://www.youtube.com/embed/V15iMEDVQ0M" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe> 
                </div>
              </div>
                <h3 className="medio center"> Feliz Día!!</h3>
                <div className="medio ed-grid">
                <div className=" s-radius-tr s-radius-tl center">
                <iframe width="60%" height="270" src="https://www.youtube.com/embed/iw6QMKwx204?color=white" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe> 
                </div>

                            
                
  </div>
  
</div>
          
)

export default CardsHome

