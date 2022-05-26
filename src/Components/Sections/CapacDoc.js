    import React, { Component } from 'react';
    import RecursosCard from './Recursos-card';
    
    const CapacDoc = () => (
    <div>
        <h2>
            Capacitación y Docencia
        </h2>
        
    <div>
    
    <div className="ed-grid s-grid-2 lg-grid-4 xl-grid-5 form">
      <h3 className='s-cols-2 xl-cols-4'> Curso Actualizacion 2022</h3>           
      <RecursosCard nombre="Módulo 1" 
       subt="Casos y generalidades en vacunas."
       image="M1.jpg" 
       pages="79"
       link="https://docs.google.com/presentation/d/1SQsD9lbAOz4G3VTaZf1lea0pin4PKktO/edit?usp=sharing&ouid=116373942796959660147&rtpof=true&sd=true"/>
        
        <RecursosCard nombre="Módulo 2" 
       subt="presentación."
       image="M2a.jpg" 
       pages="43"
       link="https://docs.google.com/presentation/d/13T1aos-Z-ndu28JtgJj2cDjdjjKTn5h_/edit?usp=sharing&ouid=116373942796959660147&rtpof=true&sd=true"/>
        <RecursosCard nombre="Módulo 2" 
       subt="Año de introducción."
       image="M2b.jpg" 
       pages="2"
       link="https://drive.google.com/file/d/1ysfgTYzJ03zpbiQnIyjMxTqx_5m6G9Ph/view?usp=sharing"/>
      

      <RecursosCard nombre="Módulo 3" 
       subt="Instructivo NOMIVAC."
       image="M3a.jpg" 
       pages="11"
       link="https://drive.google.com/file/d/1XjZ54b2jyATIDWLkYgFqgPomXoFVOp2S/view?usp=sharing"/>
      
      <RecursosCard nombre="Módulo 3" 
       subt="Reporte NOMIVAC."
       image="M3b.jpg" 
       pages="4"
       link="https://drive.google.com/file/d/1ZYrtO2Nj0uuO3ra9ezjUtbLwSxS0_xzU/view?usp=sharing"/>
       
       <RecursosCard nombre="Módulo 3" 
       subt="Tablas dinámicas DICEI."
       image="M3c.jpg" 
       pages="11"
       link="https://drive.google.com/file/d/1ZEn35R3D7WIRQ3rGdbGl8AOGPiZIbazy/view?usp=sharing"/>

        <RecursosCard nombre="Módulo 4" 
       subt="Bioseguridad"
       image="Bioseg.jpg" 
       pages="45"
       link="https://docs.google.com/presentation/d/1yLiDJJxUJbS0RaJOXzuFOJN0ptHDflAl/edit?usp=sharing&ouid=116373942796959660147&rtpof=true&sd=true"/>


      </div>
      <div className="ed-grid s-grid-2 lg-grid-4 xl-grid-5 form">
      <h2 className='s-cols-2 xl-cols-4'> Otros Recursos importantes</h2>

    

    <RecursosCard nombre="Manual del Vacunador" 
       subt="Dirección General de Redes y Programas de Salud."
       image="ManualVacunador.png" 
       pages="134"
       link="https://drive.google.com/file/d/1EgB1dE35siNobPGETCc3GNv9jvdvfMi_/view?usp=sharing"/>
        
    
    <RecursosCard nombre="Ley 27.491" 
       subt=""
       image="LeyVacunas.png" 
       pages="2"
       link="https://drive.google.com/file/d/1XbX5GVAWas2nOwUOjr8ckXEOCds01YHk/view?usp=sharing"/>
    
    <RecursosCard nombre="Plan de contingencia" 
        subt="Ante corte suministro eléctrico."
        image="P-Conting.png" 
        pages="1"
        link="https://drive.google.com/file/d/18bZYeDhRmjtQ-yGH43bPMBVHm1h4K3n_/view?usp=sharing"/>

    <RecursosCard nombre="Guia" 
        subt="Rabia: Prevención, Vigilancia y Control."
        image="G-Rabia.png" 
        pages="86"
        link="https://drive.google.com/file/d/1_JrdAXG6kUIiYbqs0R_5osmt_BEmKIJp/view?usp=sharing"/>
    </div>
    </div>
    </div>
    )
    
export default CapacDoc