import RecursosCard from "./Recursos-card"

const Slider = () => (
       <div className="container-slider">
        <div className="slider" id="slider">
            <div className="slider--section"><RecursosCard nombre="Antigripal" 
   subt="28-03-2022"
   image="Circ-28-3-22.jpg" 
   pages="1"
   link="https://drive.google.com/file/d/1HW0DcMNfo1eh1nbPi8QWG_4yrmwxEDQX/view?usp=sharing"/>
</div>
            <div className="slider--section"><RecursosCard nombre="Carnet Unificado Vacunación" 
   subt="Niños y Adolescentes"
   image="Carnet-Niños.jpg" 
   pages="2"
   link="https://drive.google.com/file/d/1CvFIRpMNoxwchTNh1BjvLyzS-mSBr8lw/view?usp=sharing"/>
</div>
            <div className="slider--section"><RecursosCard nombre="Carnet Unificado Vacunación" 
   subt="Adultos"
   image="Carnet-Adultos.jpg" 
   pages="2"
   link="https://drive.google.com/file/d/146eczv0PFJEYu62APWAdnKCw6xsUX9ra/view?usp=sharing"/>
</div>
            <div className="slider--section"><RecursosCard nombre="Pautas Vacinación Antigripal" 
   subt="21-03-2022"
   image="circ-21-03-22.jpg" 
   pages="1"
   link="https://docs.google.com/document/d/1I7zy5DHsHx1XGW-ujhobYUL5VoUPJlic/edit?usp=sharing&ouid=116373942796959660147&rtpof=true&sd=true"/>
</div>
</div>
        
    </div>       
    
)
export default Slider



