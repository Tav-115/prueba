import RecursosCard from "./Recursos-card"

const Slider = () => (
       <div className="container-slider">
        <div className="slider" id="slider">
            <div className="slider--section">
            <RecursosCard nombre="Lineamientos Técnicos" 
   subt="Segundo Refuerzo."
   image="Lin-seg-ref.jpg" 
   pages="30"
   link="https://drive.google.com/file/d/1Jw84c9H-FWBB40skls0eB868Xf3P73xP/view?usp=sharing"/>
        </div>
            <div className="slider--section">
            <RecursosCard nombre="Módulo 4" 
       subt="Bioseguridad"
       image="Bioseg.jpg" 
       pages="45"
       link="https://docs.google.com/presentation/d/1yLiDJJxUJbS0RaJOXzuFOJN0ptHDflAl/edit?usp=sharing&ouid=116373942796959660147&rtpof=true&sd=true"/>
</div>
            <div className="slider--section">
            
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



