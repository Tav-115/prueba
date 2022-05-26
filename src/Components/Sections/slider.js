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
            <RecursosCard nombre="Moderna" 
   subt="17-05-2022"
   image="Ext.Mod.jpg" 
   pages="2"
   link="https://drive.google.com/file/d/1SZ1T9DvLo-1b8cyWrDf14hJWGAwxhCGU/view?usp=sharing"/>
            </div>
            <div className="slider--section">
            <RecursosCard nombre="Sputnik (I y II)" 
   subt="03-03-2022"
   image="Ext.Sput.jpg" 
   pages="3"
   link="https://drive.google.com/file/d/1ZMeylmFmqpcMwQuH33hO5YO0NRzJWd7-/view?usp=sharing"/>

            </div>
         
            
</div>
</div>
      
          
    
)
export default Slider



