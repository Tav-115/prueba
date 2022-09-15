import RecursosCard from "./Recursos-card"

const Slider = () => (
     <div className="container-slider">
        <div className="slider " id="slider">

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

        <div className="slider--section box-shadow">
                <RecursosCard nombre="Resumen Vctos c/extensión" 
                subt="Actualizado 1-9-22"
                image="https://drive.google.com/uc?export=download&id=1VjJuSvgB3EjhYeafmAQr1KNKF0j3r3jg" 
                link="https://drive.google.com/file/d/1EvgtV4-u315cfd3SJz6bajx8fzoXZ_pL/view?usp=sharing"/> 
            </div>

        <div className="slider--section box-shadow">
                <RecursosCard nombre="Díptico" 
                subt="CNS SRPP 2022 ALTA"
                image="https://drive.google.com/uc?export=download&id=1vQGbbtcXvbtP4wtHp-3sVxp6n23yjb9m" 
                link="https://drive.google.com/file/d/1hiarFh26j8yUCgn0Qv3OdWbhFfKEuJka/view?usp=sharing"/> 
        </div>

         
            

        
                    
</div>

</div>
      
          
    
)
export default Slider



