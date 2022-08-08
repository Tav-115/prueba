import RecursosCard from "./Recursos-card"

const Slider = () => (
     <div className="container-slider">
        <div className="slider " id="slider">

        <div className="slider--section box-shadow">         
                <RecursosCard nombre="Moderna Pediátrica." 
                subt="6 m a 2 años."
                image="https://drive.google.com/uc?export=download&id=1z_u4b1pXlOzb68knjpREJ4myAb4ZB5Gv"
                pages="3"
                link="https://drive.google.com/file/d/1rx77OEgbHV_oJAlDpgnYTZn6fRCXBAmL/view?usp=sharing"/>
        </div> 
            <div className="slider--section box-shadow">
                <RecursosCard nombre="Exttensiones Pfizer Ped." 
                subt="3-8-22."
                image="https://drive.google.com/uc?export=download&id=1QzFYuHWkNZReXF2Q_OzpxQ9k9PNHkyWJ" 
                pages="1"
                link="https://docs.google.com/document/d/1XwsWNpszW7QuZuYBIGX2yeUtI2Wg6QTL/edit?usp=sharing&ouid=116373942796959660147&rtpof=true&sd=true"/> 
            </div>

        <div className="slider--section box-shadow">
                <RecursosCard nombre="Extensión de uso" 
                subt="Antigripal adyuvantada (26-7-22)"
                image="https://drive.google.com/uc?export=download&id=1j2Wv0Ba5L7SwgxrcKhL9Rx3qWqQdqvmO" 
                pages="1"
                link="https://drive.google.com/file/d/15ECcoP4kcRoO6U6Ag6feOnAgBSYIwQsd/view?usp=sharing"/> 
            </div>
        <div className="slider--section box-shadow">
                <RecursosCard nombre="Extensiones Vacunas Covid" 
                subt="Al 26-7-22"
                image="https://drive.google.com/uc?export=download&id=1vMMo4CT3wQa725n1bY5PHPZ_809JoI22" 
                pages="5"
                link="https://drive.google.com/file/d/1X2KNAq_PTS9U890zXXZ5nfpLOs7KuhN8/view?usp=sharing"/> 
            </div>
            
            
            
</div>

</div>
      
          
    
)
export default Slider



