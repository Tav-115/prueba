import RecursosCard from "./Recursos-card"

const Slider = () => (
       <div className="container-slider">
        <div className="slider" id="slider">
            <div className="slider--section">
               <RecursosCard nombre="2do Refuerzo" 
    subt="18-04-2022"
   image="C-18-4-22.jpg" 
   pages="4"
   link="https://drive.google.com/file/d/1USHagc3iTVsTArEH1Zwuuxi0wi1oAgg1/view?usp=sharing"/>
</div>
            <div className="slider--section">
            <RecursosCard nombre="Módulo 3" 
       subt="Instructivo NOMIVAC."
       image="M3a.jpg" 
       pages="11"
       link="https://drive.google.com/file/d/1XjZ54b2jyATIDWLkYgFqgPomXoFVOp2S/view?usp=sharing"/>
            </div>
            <div className="slider--section">
            <RecursosCard nombre="Módulo 3" 
       subt="Reporte NOMIVAC."
       image="M3b.jpg" 
       pages="4"
       link="https://drive.google.com/file/d/1ZYrtO2Nj0uuO3ra9ezjUtbLwSxS0_xzU/view?usp=sharing"/>
      
            </div>
            <div className="slider--section">
            <RecursosCard nombre="Módulo 3" 
       subt="Tablas dinámicas DICEI."
       image="M3c.jpg" 
       pages="11"
       link="https://drive.google.com/file/d/1ZEn35R3D7WIRQ3rGdbGl8AOGPiZIbazy/view?usp=sharing"/>

            </div>
         
            
</div>
</div>
      
          
    
)
export default Slider



