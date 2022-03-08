    import React, { Component } from 'react';
    import RecursosCard from './Recursos-card';
    
    const CapacDoc = () => (
    <div >
        <h2>
            Capacitacion y Docencia
        </h2>
    <div className="ed-grid s-grid-2 lg-grid-4 xl-grid-10 form">
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
    )
    
export default CapacDoc