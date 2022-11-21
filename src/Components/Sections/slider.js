import RecursosCard from "./Recursos-card"

const Slider = () => (
     <div className="container-slider">
        <div className="slider " id="slider">

        <div className="slider--section box-shadow">
                <RecursosCard nombre="Lineamientos Técnicos" 
                subt="3er Refuerzo Covid"
                image="https://drive.google.com/uc?export=download&id=1_obQxbZmGyH9InceutsGdYD0mn_bGFdQ" 
                link="https://drive.google.com/file/d/1st9JiEg_uSMq_ACV1J3kwciyh8jakCYz/view?usp=sharing"/> 
        </div>

        <div className="slider--section box-shadow">
                <RecursosCard nombre="Circular 3er Refuerzo" 
                subt="Covid"
                image="https://drive.google.com/uc?export=download&id=1uJKAgmSVz4DMQ1bxvgTdMacD8xQs67E7" 
                link="https://drive.google.com/file/d/1UIX2fH4AH7gg20Sk0ZnYHLQoeMF90S7T/view?usp=sharing"/> 
        </div>

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


        
</div>

</div>
      
          
    
)
export default Slider



