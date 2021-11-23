import { NavLink } from "react-router-dom" 

const Header = () => (
  <header className="ed-header">
      <div className="ed-grid s-grid-6 m-grid-6 medio">
        <div className="m-cols-1 img-container">
          <a href="/"><img 
           src="https://3.bp.blogspot.com/-gVljr1kHFTI/Xt-XxEOtVUI/AAAAAAAAAT8/mUDkQ-9yb0033g3BKkGHm4LRe7eajWvcQCK4BGAYYCw/s150/Logo.png"/>
           </a>
        </div>
           <div className="m-cols-4 s-cols-4 s-center s-main-center"><h3>Programa Ampliado de Inmunizaciones</h3> </div>
        <div className="s-x-6 s-cols-1 s-cross-center s-main-end header-links">
          <nav className="main-menu" id="main-menu">
            <ul>
              <li>< NavLink to="/" exact="true" >Inicio</NavLink></li>
              <li>< NavLink to="/ContactUs" exact="true"  >Contactanos</NavLink></li>
              <li>< NavLink to="/AboutUs" exact="true" >Nosotros</NavLink></li>
            </ul>
          </nav>
          <div className="main-menu-toggle to-l" id="main-menu-toggle"></div>
        </div>
      </div>
      <div class="ed-grid lg-grid-5 small">
 
        <div class="main-header ">
        <div className="circle">
          <a href="/"><img 
           src="https://3.bp.blogspot.com/-gVljr1kHFTI/Xt-XxEOtVUI/AAAAAAAAAT8/mUDkQ-9yb0033g3BKkGHm4LRe7eajWvcQCK4BGAYYCw/s150/Logo.png"/>
           </a>
        </div>
        </div>
        <nav class="nav lg-cols-4 s-cross-center ed-grid full">
    
        <ul class="menu s-main-distribute lg-to-right s-mb-0 s-pl-0 s-py-1">
        
        <li class="lg-mr-3">
          <a class="link s-column s-cross-center active" href="#">
            
            <svg class="icon to-lg s-mb-0">
              <use href="#home"></use>
            </svg>
            <span>Inicio</span>
          </a>
        </li>
        <li class="lg-mr-3">
          <a class="link s-column s-cross-center" href="#">
            <svg class="icon to-lg s-mb-0">
              <use href="#studies"></use>
            </svg>
            <span>Estudios</span>
          </a>
        </li>
        <li class="lg-mr-3">
          <a class="link s-column s-cross-center" href="#">
            <svg class="icon to-lg s-mb-0">
              <use href="#courses"></use>
            </svg>
            <span>Cursos</span>
          </a>
        </li>
        <li>
          <a class="link s-column s-cross-center" href="#">
            <svg class="icon to-lg s-mb-0">
              <use href="#notes"></use>
            </svg>
            <span>Notas</span>
          </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>

)

export default Header