import RecursosCard from "./Recursos-card"

const Slider = () => (
     <div className="container-slider">
        <div className="slider " id="slider">

        <div className="slider--section box-shadow">
                <RecursosCard nombre="Díptico" 
                subt="CNS SRPP 2022 ALTA"
                image="https://drive.google.com/uc?export=download&id=1vQGbbtcXvbtP4wtHp-3sVxp6n23yjb9m" 
                link="https://drive.google.com/file/d/1hiarFh26j8yUCgn0Qv3OdWbhFfKEuJka/view?usp=sharing"/> 
        </div>

        <div className="slider--section box-shadow">         
                <RecursosCard nombre="Formulario MRV 2022" 
                subt=""
                image="https://drive.google.com/uc?export=download&id=1-tTUFFjSR1rWZofrJci3i8tlPTj-fH8a"
                pages="3"
                link="https://drive.google.com/file/d/1TJ7q2yJ4YqNZSSXN7vzdfJUDD0Av9rmq/view?usp=sharing"/>
        </div> 
            <div className="slider--section box-shadow">
                <RecursosCard nombre="Planilla Registro Diario" 
                subt="Sarampión."
                image="https://drive.google.com/uc?export=download&id=1XgBlRKw6umfGxKkZn7ARAoUrkuaHD7CS" 
                pages="1"
                link="https://drive.google.com/file/d/1YnpNeNVEuqLPBr5HJ2YaZl1DlDXwmV8e/view?usp=sharing"/> 
            </div>

        <div className="slider--section box-shadow">
                <RecursosCard nombre="Flyer para Imprimir" 
                subt="Campaña Sarampión."
                image="https://drive.google.com/uc?export=download&id=1mapbDm_XZdti1ekbn4tEsVgdrPkeeWgQ" 
                pages="1"
                link="https://drive.google.com/file/d/1_gFaKCHcNXJqyMRxn6fDQkvba_8meDWU/view?usp=sharing"/> 
            </div>
                    
</div>

</div>
      
          
    
)
export default Slider



