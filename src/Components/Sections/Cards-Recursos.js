import React, { Component } from 'react';

const CardsRecursos = () => (
<div className="ed-grid s-grid-2 lg-grid-3 xl-grid-10 form">
   <article class="s-shadow-bottom">
       
    <div class="s-ratio-16-9 img-container s-radius-tl s-radius-tr">
        <img src={`${process.env.PUBLIC_URL}/Assets/images/ManualVacunador.png`} 
     alt="ManualVacunador"/>
    </div>
    
    <div class="s-bg-white s-pxy-2">
        <h3>Manual Vacunador</h3>
        <p class="s-mb-0">Dirección General de Redes y Programas de Salud.</p>
    </div>
    <footer class="center s-bg-grey s-pxy-2 s-radius-br s-radius-bl">
        
        <a href="https://drive.google.com/file/d/1EgB1dE35siNobPGETCc3GNv9jvdvfMi_/view?usp=sharing" target="_blank"> 
        <div class="button">Páginas: 134</div>
        </a>
    </footer>
</article>

<article class="s-shadow-bottom">
       
    <div class="s-ratio-16-9 img-container s-radius-tl s-radius-tr">
        <img src={`${process.env.PUBLIC_URL}/Assets/images/PanillaNomivac.png`} 
     alt="Planilla Nomivac"/>
    </div>
    
    <div class="s-bg-white s-pxy-2">
        <h3>Planilla Nomivac</h3>
        <p class="s-mb-0">Sistema Integrado de Información Sanitaria Argentino.</p>
    </div>
    <footer class="center s-bg-grey s-pxy-2 s-radius-br s-radius-bl">
        
        <a href="https://drive.google.com/file/d/1gHMhphAGGBZ39koA51BIqYYlOAFPdBWk/view?usp=sharing" target="_blank"> 
        <div class="button">Páginas: 1</div>
        </a>
    </footer>
</article>

</div>
)
export default CardsRecursos