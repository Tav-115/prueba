import RecursosCard from "./Recursos-card"

const Slider = () => (
       <div className="container-slider">
        <div className="slider" id="slider">
            <div className="slider--section">
            <RecursosCard nombre="Lineamientos Técnicos" 
   subt="Primer Refuerzo 5 a 11 Años."
   image="Lin-26-5-22.jpg" 
   pages="28"
   link="https://drive.google.com/file/d/1r_S0kEiW9ZgidSR_h6rajjJq4HLPv0oL/view?usp=sharing"/>
            </div>
            <div className="slider--section">
            <RecursosCard nombre="Nomivac" 
   subt="Alta usuario"
   image="FormAltUs.jpg" 
   pages="1"
   link="https://docs.google.com/spreadsheets/d/1lXOHeOPgkz_8z9X11gC9UTRVyRA-T98f/edit?usp=sharing&ouid=116373942796959660147&rtpof=true&sd=true"/>
            </div>
            <div className="slider--section">
            <RecursosCard nombre="Nomivac" 
   subt="Modificación usuario"
   image="FormModifUs.jpg" 
   pages="1"
   link="https://docs.google.com/spreadsheets/d/1-Zd_Uz8lc2yfWnJQnkSR4LAHtsjg8UTB/edit?usp=sharing&ouid=116373942796959660147&rtpof=true&sd=true"/>
            </div>
            <div className="slider--section">
            <RecursosCard nombre="Nomivac" 
   subt="Baja usuario"
   image="FormBajaUs.jpg" 
   pages="1"
   link="https://docs.google.com/spreadsheets/d/1s4QQBE4sVrULnbfICN5yoE0sHJuG3v3x/edit?usp=sharing&ouid=116373942796959660147&rtpof=true&sd=true"/>
            </div>
         
            
</div>
</div>
      
          
    
)
export default Slider



