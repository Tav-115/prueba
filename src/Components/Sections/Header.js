import { NavLink } from "react-router-dom" 


const Header = () => (
    <header className="main-header">
      <div className="ed-grid s-grid-10 m-grid-6">
        <div className="m-cols-1 img-container medio">
          <a href="/"><img 
           src="https://3.bp.blogspot.com/-gVljr1kHFTI/Xt-XxEOtVUI/AAAAAAAAAT8/mUDkQ-9yb0033g3BKkGHm4LRe7eajWvcQCK4BGAYYCw/s150/Logo.png"/>
           </a>
        </div>
        <div className="s-ratio-16-9 s-cols-2 img-container small icono">
          <a href="/">
          <img 
           src="https://3.bp.blogspot.com/-gVljr1kHFTI/Xt-XxEOtVUI/AAAAAAAAAT8/mUDkQ-9yb0033g3BKkGHm4LRe7eajWvcQCK4BGAYYCw/s150/Logo.png"/>
           </a>
        </div>
          <div className="m-cols-4 s-cols-4 m-cross-center s-main-center p-t-1 medio"><h3>Programa Ampliado de Inmunizaciones</h3> </div>
          <div className="s-x-3 s-cols-6 s-cross-center s-main-center small small-center"><h3>Programa Ampliado de Inmunizaciones</h3> </div>
        <div className="s-x-6 s-cols-1 s-cross-center s-main-end header-links medio">
          <nav className="main-menu" id="main-menu">
            <ul>
              <li>< NavLink to="/" exact="true" className="link s-column s-cross-center active Menu" 
              style={({ isActive }) => ({
              color: isActive ? '#64922f' : '#545e6f',
              background: isActive ? '#fff' : '#fff',
              })}
              >Inicio</NavLink></li>
              <li>< NavLink to="/ContactUs" exact="true" className="link s-column s-cross-center active Menu"  
              style={({ isActive }) => ({
                color: isActive ? '#64922f' : '#000',
                background: isActive ? '#fff' : '#fff',                
                })} 
                >Contactanos</NavLink></li>
              <li>< NavLink to="/AboutUs" exact="true" className="link s-column s-cross-center active Menu"
              style={({ isActive }) => ({
                color: isActive ? '#64922f' : '#545e6f',
                background: isActive ? '#fff' : '#fff',
                })}
                >Nosotros</NavLink></li>
            </ul>
          </nav> 
          
          <div className="main-menu-toggle to-l" id="main-menu-toggle"></div>
        </div>
        <div className="s-x-10 s-cols-1  s-cross-center header-links">
          <nav className="small main-menu showColr" id="main-menus">
            <ul>
              <li>< NavLink to="/" exact="true" className="link s-column s-cross-center active" >Inicio</NavLink></li>
              <li>< NavLink to="/ContactUs" exact="true" className="link s-column s-cross-center active"  >Contactanos</NavLink></li>
              <li>< NavLink to="/AboutUs" exact="true" className="link s-column s-cross-center active">Nosotros</NavLink></li>
            </ul>
          </nav>
          
          <div className="main-menu-toggle to-l" id="main-menu-toggles"></div>
         
        </div>

        
      </div>
      
      
    </header>
)

export default Header