import RecursosCard from './Recursos-card';
    
    const Covid = () => (
    <div >
        <h2 className='h2Cov'>
            Covid-19
        </h2>
        <div className="ed-grid s-grid-2 lg-grid-4 xl-grid-5 form">

        <RecursosCard nombre="Dosis Viajeros - Covid" 
   subt="18-03-2022"
   image="Circ-18-03-22.jpg" 
   pages="5"
   link="https://drive.google.com/file/d/14vMFuICFdAyw7EkWkfmv4tkxNMoTN_qz/view?usp=sharing"/>

        <RecursosCard nombre="Pfizer Pediátrica" 
   subt="Almacenamiento, manipulación y envío."
   image="PfizerPedACE.jpg" 
   pages="16"
   link="https://drive.google.com/file/d/1GyviLEuhAD2z6MatuKwFBLI1JJLmRS0Q/view?usp=sharing"/>

<RecursosCard nombre="Pizer Pediátrica" 
   subt="Cominarty (24/2/22)."
   image="PfizerPed.jpg" 
   pages="9"
   link="https://drive.google.com/file/d/1_WIryFCzHJstUi9s4GbNV7a-osyGQbpx/view?usp=sharing"/>

<RecursosCard nombre="Circular - Refuerzo 4ta dosis" 
   subt="7/3/2022"
   image="4tadosis.jpg" 
   pages="1"
   link="https://drive.google.com/file/d/1-CAOmY0rxdU6PLft4RXa1ERM-xTEwGs1/view?usp=sharing"/>

<RecursosCard nombre="Extensión de Uso -  COMIRNATY" 
   subt="24/2/2022."
   image="Ext.jpg" 
   pages="1"
   link="https://drive.google.com/file/d/1sVr2wWXIvrhl1XXX5DrmCKZldx_skvkf/view?usp=sharing"/>

   <RecursosCard nombre="Circular - Covid" 
   subt="Actualización Estrategia Dosis Refuerzo."
   image="Circ-AcEstr.png" 
   pages="1"
   link="https://drive.google.com/file/d/1IMHw3f3L-NIWVh7cAol53giCTRhk0eQb/view?usp=sharing"/>

<RecursosCard nombre="Memorándum - Covid" 
   subt="Intervalo aplicación dosis refuerzo."
   image="Memo-IntDosis.png" 
   pages="2"
   link="https://drive.google.com/file/d/1blTZOUBojpNku7-aT6-mTy5eCqe2jvqo/view?usp=sharing"/>

<RecursosCard nombre="Plan de contingencia" 
   subt="Ante corte suministro eléctrico."
   image="P-Conting.png" 
   pages="1"
   link="https://drive.google.com/file/d/18bZYeDhRmjtQ-yGH43bPMBVHm1h4K3n_/view?usp=sharing"/>


<RecursosCard nombre="Planilla Nomivac" 
   subt="Sistema Integrado de Información Sanitaria Argentino."
   image="PanillaNomivac.png" 
   pages="1"
   link="https://drive.google.com/file/d/1gHMhphAGGBZ39koA51BIqYYlOAFPdBWk/view?usp=sharing"/>


<RecursosCard nombre="Dosis Adicional Covid" 
   subt="Actualizacion Noviembre 2021."
   image="DosisExtra2.png" 
   pages="14"
   link="https://drive.google.com/file/d/1aBYLCUHsjUR85Cdfsa5WayVb4ZZFEV7r/view?usp=sharing"/>

<RecursosCard nombre="Formulario Desvio en Cadena de Frio" 
   subt=""
   image="FormularioFrio.png" 
   pages="2"
   link="https://docs.google.com/document/d/1FonhaCJbrqp3qgX27Q6jYng5FBBb63Gn/edit?usp=sharing&ouid=116373942796959660147&rtpof=true&sd=true"/>

<RecursosCard nombre="Planilla de Pedido de Insumos" 
   subt=""
   image="PlanillaPedidos.png" 
   pages="3"
   link="https://docs.google.com/document/d/166EjZuHDF8C4QxkUV6upLq6WUPhESpyT/edit?usp=sharing&ouid=116373942796959660147&rtpof=true&sd=true"/>

<RecursosCard nombre="Instructivo ESAVI" 
   subt=""
   image="InstructivoEsavi.png" 
   pages="5"
   link="https://drive.google.com/file/d/1XbX5GVAWas2nOwUOjr8ckXEOCds01YHk/view?usp=sharing"/>
   </div>                    
   
   <div className="ed-grid s-grid-1 lg-grid-2 xl-grid-2">
      <h2 className='s-cols-2 xl-cols-2'> Videos</h2>           
              
      <div className="card">
                <div className="center s-radius-tr s-radius-tl">
                <h3>Almacenamiento, conservación y preparación Pfizer pediátrica</h3>
                <iframe width="380" height="250" src="https://www.youtube.com/embed/yV6r-Mf1cXI" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
              </div>   
      </div>
             
   </div>
</div>
    )
    
export default Covid