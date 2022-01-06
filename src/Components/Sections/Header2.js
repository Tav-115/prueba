import { NavLink } from "react-router-dom" 

const Header = () => (
  <header class="ed-menu s-bg-grey s-py-2 s-px-2 lg-px-4">
      <div class="ed-grid lg-grid-5">
        <div class="s-cross-center s-main-center lg-main-start">
            <img class="logo" src="https://ed.team/static/images/logo.svg"/>
        </div>
        <nav class="nav lg-cols-4 s-cross-center ed-grid full">
          <ul class="menu s-main-distribute lg-to-right s-mb-0 s-pl-0 s-py-1">
            <li class="lg-mr-3"><a class="link s-column s-cross-center active" href="#">
                <svg class="icon to-lg s-mb-0">
                  <use href="#home"></use>
                </svg><span>Inicio</span></a></li>
            <li class="lg-mr-3"><a class="link s-column s-cross-center" href="#">
                <svg class="icon to-lg s-mb-0">
                  <use href="#studies"></use>
                </svg><span>Estudios</span></a></li>
            <li class="lg-mr-3"><a class="link s-column s-cross-center" href="#">
                <svg class="icon to-lg s-mb-0">
                  <use href="#courses"></use>
                </svg><span>Cursos</span></a></li>
            <li><a class="link s-column s-cross-center" href="#">
                <svg class="icon to-lg s-mb-0">
                  <use href="#notes"></use>
                </svg><span>Notas</span></a></li>
          </ul>
        </nav>
      </div>
    </header>

)

export default Header