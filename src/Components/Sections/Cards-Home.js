import { NavLink } from "react-router-dom"
const CardsHome = () => (
<div className="ed-grid lg-grid-4 s-grid-1 gap-2 l-block m-grid-2 row-gap">
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
                  <img src="https://cdn.pixabay.com/photo/2017/06/10/07/18/list-2389219_960_720.png"/></div>
              <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">               
                <div className="s-mb-2 s-main-center card__teachers">                 
                </div>
                <div className="s-main-center"><a className="button VerdeSaludClaro button--tiny" href="Actividades">Actividades PAI-2020</a></div>
              </div>
            </div>
            <div className="card">
              <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
                  <img src="https://cdn.pixabay.com/photo/2017/01/09/14/48/approved-1966719_960_720.png"/></div>
              <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">               
                <div className="s-mb-2 s-main-center card__teachers">                 
                </div>
                <div className="s-main-center"><a className="button VerdeSaludClaro button--tiny" href="Aprovados">Aprovados-Inmunizaciones</a></div>
              </div>
            </div>
            <div className="card">
              <div className="img-container s-center s-ratio-16-9 s-radius-tr s-radius-tl">
              <iframe width="300" height="200" src="https://www.youtube.com/embed/4DN9rt8tmoA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                     </div>
              <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">               
                <div className="s-mb-2 s-main-center card__teachers">                 
                </div>
                <div className="s-main-center"><a className="button VerdeSaludClaro button--tiny" href="Aprovados">Video-Vacunas</a></div>
              </div>
            </div>               
</div>
          
)

export default CardsHome