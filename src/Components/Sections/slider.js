import RecursosCard from "./Recursos-card"

const Slider = () => (
     <div className="container-slider">
        <div className="slider " id="slider">

        <div className="slider--section box-shadow">         
                <RecursosCard nombre="Algoritmo EFE" 
                subt="11-10-22"
                image="https://drive.google.com/uc?export=download&id=1yFnY-0g-Rupmgc3JJNu0y1YVS6cnMtS9"
                link="https://drive.google.com/file/d/1pzem1i1tveAnycsj9IzvvzbU5YO1oDyk/view?usp=sharing"/>
        </div>

        <div className="slider--section box-shadow">
                <RecursosCard nombre="Carnet de Vacunación" 
                subt="Campaña SRPP"
                image="https://drive.google.com/uc?export=download&id=15U1BBDUQt7VosC0ZmAPVmckDS7nc0Unw" 
                pages="1"
                link="https://drive.google.com/file/d/1euGzlDFWfiDJ24gJd2ws9Y73aF6FNGpX/view?usp=sharing"/> 
        </div>

        <div className="slider--section box-shadow">
                <RecursosCard nombre="Instructivo Registro Dósis" 
                subt="Campaña SRPP 2022"
                image="https://drive.google.com/uc?export=download&id=1QY2L9NYSo4DloiQ0rxe3IX041b8viRdT" 
                link="https://drive.google.com/file/d/1wA9B7vmDIRxHC6Ab_pohDrnONEsLSycB/view?usp=sharing"/> 
        </div>

        <div className="slider--section box-shadow">
                <RecursosCard nombre="Campaña Vacunación" 
                subt="6 Imagenes (.Rar)"
                image="https://drive.google.com/uc?export=download&id=1b20lXr3Nl_zAITEOFttIxjG0VIfbdE5w" 
                link="https://drive.google.com/file/d/1m4EYTsq6rTc8HbywXcB-Ju4lgoaXhekj/view?usp=sharing"/> 
        </div>

        
</div>

</div>
      
          
    
)
export default Slider



