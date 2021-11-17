import { NavLink } from "react-router-dom" 

const Header = () => (
    <header className="main-header">
      <div className="ed-grid s-grid-7 lg-grid-6">
        <div className="s-cols-1 lg-cols-1 s-cross-center img-container ">
          <a href="/"><img 
           src="https://3.bp.blogspot.com/-gVljr1kHFTI/Xt-XxEOtVUI/AAAAAAAAAT8/mUDkQ-9yb0033g3BKkGHm4LRe7eajWvcQCK4BGAYYCw/s150/Logo.png"/>
           </a>
           </div>
          <div className="s-cols-4 s-cross-center s-main-center">  <h3>Programa Ampliado de Inmunizaciones</h3> </div>
        <div className="s-x-6 s-cols-1 s-cross-center s-main-end header-links">
          <nav className="main-menu" id="main-menu">
            <ul>
              <li>< NavLink to="/" exact >Inicio</NavLink></li>
              <li>< NavLink to="/ContactUs" exact >Contactanos</NavLink></li>
              <li>< NavLink to="/AboutUs" exact>Nosotros</NavLink></li>
            </ul>
          </nav>
          <div className="main-menu-toggle to-l" id="main-menu-toggle"></div>
        </div>
      </div>
    </header>
)

export default Header