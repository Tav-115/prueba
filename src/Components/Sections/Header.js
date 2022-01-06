import { NavLink } from "react-router-dom" 

const Header = () => (
    <header className="main-header">
      <div className="ed-grid s-grid-6 m-grid-6">
        <div className="m-cols-1 img-container medio">
          <a href="/"><img 
           src="https://3.bp.blogspot.com/-gVljr1kHFTI/Xt-XxEOtVUI/AAAAAAAAAT8/mUDkQ-9yb0033g3BKkGHm4LRe7eajWvcQCK4BGAYYCw/s150/Logo.png"/>
           </a>
        </div>
        <div className="s-ratio-16-9 img-container small icono">
          <a href="/"><img 
           src="https://3.bp.blogspot.com/-gVljr1kHFTI/Xt-XxEOtVUI/AAAAAAAAAT8/mUDkQ-9yb0033g3BKkGHm4LRe7eajWvcQCK4BGAYYCw/s150/Logo.png"/>
           </a>
        </div>
          <div className="m-cols-4 s-cols-4 s-center s-main-center p-t-1 medio"><h3>Programa Ampliado de Inmunizaciones</h3> </div>
          <div className="m-cols-4 s-cols-4 s-center s-main-center small"><h3>Programa Ampliado de Inmunizaciones</h3> </div>
        <div className="s-x-6 s-cols-1 s-cross-center s-main-end header-links medio">
          <nav className="main-menu" id="main-menu">
            <ul>
              <li>< NavLink to="/" exact="true" className="link s-column s-cross-center active" >Inicio</NavLink></li>
              <li>< NavLink to="/ContactUs" exact="true" className="link s-column s-cross-center active"  >Contactanos</NavLink></li>
              <li>< NavLink to="/AboutUs" exact="true" className="link s-column s-cross-center active">Nosotros</NavLink></li>
            </ul>
          </nav>
          <div className="main-menu-toggle to-l" id="main-menu-toggle"></div>
        </div>

        
      </div>
    </header>
)

export default Header