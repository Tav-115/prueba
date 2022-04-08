import { NavLink } from "react-router-dom"
import Slider from "./slider"
const CardsHome = () => (
<div  className="ed-grid lg-grid-1">
  <div className="ed-grid lg-grid-2 s-grid-1 gap-1 l-block m-grid-2 row-gap">
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
              <div className="card"> <h2> Novedades</h2>
                  <div className="img-container "><div className="slider--btn slider--btn--right" id="btn--right">&#62;</div>
        <div className="slider--btn slider--btn--left" id="btn--left">&#60;</div>
                  <Slider/>
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
              <div className="card small">
                <div className="img-container m-cen s-ratio-16-9 s-radius-tr s-radius-tl">
                <iframe width="100%" height="200" src="https://www.youtube.com/embed/iw6QMKwx204" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                      </div>
                <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">               
                  <div className="s-mb-2 s-main-center card__teachers">                 
                  </div>
                  <div className="s-main-center"><a className="button VerdeSaludClaro button--tiny" href="https://youtu.be/iw6QMKwx204">Ver en Youtube</a></div>
                </div>
              </div> 
                         
              </div>
      <div className="medio lg-grid-1">
                <div className="center s-radius-tr s-radius-tl">
                <iframe width="430" height="270" src="https://www.youtube.com/embed/iw6QMKwx204?color=white" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
              </div>                     
  </div>
</div>
          
)

export default CardsHome