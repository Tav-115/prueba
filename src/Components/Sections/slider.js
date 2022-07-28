import RecursosCard from "./Recursos-card"

const Slider = () => (
     <div className="container-slider">
        <div className="slider" id="slider">
        <div className="slider--section">
                <RecursosCard nombre="Extensiones Vacunas Covid" 
                subt="Al 26-7-22"
                image="https://drive.google.com/uc?export=download&id=1vMMo4CT3wQa725n1bY5PHPZ_809JoI22" 
                pages="5"
                link="https://drive.google.com/file/d/1X2KNAq_PTS9U890zXXZ5nfpLOs7KuhN8/view?usp=sharing"/> 
            </div>
            <div className="slider--section">         
                <RecursosCard nombre="Sociedad Arg. de Pediatría." 
                subt="Vac 6 m a 3 años."
                image="https://drive.google.com/uc?export=download&id=1QoiIA4ttQPCCKoVoU2D6DxqFHwlDixJ0"
                pages="8"
                link="https://drive.google.com/file/d/1tq7Shp9oeJGQtAk9h_H_D4AwcvXD27jy/view?usp=sharing"/>
            </div> 
            <div className="slider--section">
                <RecursosCard nombre="Manual Vac. Moderna" 
                subt="6 m a 3 años."
                image="https://drive.google.com/uc?export=download&id=1W318d7MiDcjiSGUUdxKirJrgEwqAnqKv" 
                pages="38"
                link="https://drive.google.com/file/d/1D9ZycOxIfCDShjQ0KedGsFX0EsAM3yu8/view?usp=sharing"/> 
            </div>
            <div className="slider--section">
                <RecursosCard nombre="Anmat- Antigripal" 
                subt="Mayores de 65 años."
                image="https://drive.google.com/uc?export=download&id=1oDO3Wqm8umKBMEmhR6s2V_4L7AtjcRrt" 
                pages="3"
                link="https://drive.google.com/file/d/1d4m4U8HPMC9o78k-blSs1keLb8mNrTTA/view?usp=sharing"/> 
            </div>
            
         
            
</div>

</div>
      
          
    
)
export default Slider



