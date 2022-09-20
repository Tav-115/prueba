import RecursosCard from "./Recursos-card"

const Slider = () => (
     <div className="container-slider">
        <div className="slider " id="slider">

        <div className="slider--section box-shadow">
                <RecursosCard nombre="Instructivo Registro Dosis" 
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

        <div className="slider--section box-shadow">         
                <RecursosCard nombre="Extención Pfizer" 
                subt="8-9-22"
                image="https://drive.google.com/uc?export=download&id=1_TEr1nVpQDDz9bFFGqIw3M9uqoqoIVOd"
                link="https://drive.google.com/file/d/1vWrWki9fQ-1sjaHy88G39Z8Hfjtpo717/view?usp=sharing"/>
        </div>

        <div className="slider--section box-shadow">
                <RecursosCard nombre="Recopilación Extenciones de Vctos." 
                subt="Vacunas Covid al 1-9-22 (archivo .rar)"
                image="https://drive.google.com/uc?export=download&id=1DX8RfK6EiNKP5bmln_rzzc86yaw74mGm" 
                pages="1"
                link="https://drive.google.com/file/d/1ZD9ez4IbhydVZUAi2ZKXPECoGjfCcAkf/view?usp=sharing"/> 
            </div>

</div>

</div>
      
          
    
)
export default Slider



