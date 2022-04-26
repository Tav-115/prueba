import React, { Component } from 'react';
import RecursosCard from './Recursos-card';

const CardsRecursos = () => (
   <div>
   <div className="ed-grid s-grid-3 lg-grid-4 xl-grid-3">
      <a className="button light-color " href="#Memos">Memos</a>
      <a className="button light-color s-cols-2 m-cols-1"href="#Presentaciones">Presentaciones (PwP)</a>
      <a className="button light-color " href="#Manuales">Manuales</a>
      <a className="button light-color " href="#Circulares">Circulares</a>
      <a className="button light-color " href="#Notas">Notas/Res.</a>
      <a className="button light-color " href="#Plantillas">Plantillas</a>
   </div>
   
      <div className="ed-grid s-grid-2 lg-grid-4 xl-grid-6">
      <h2 className='s-cols-2 m-cols-4 xl-cols-6'> Lineamientos Técnicos</h2>           
              
      <RecursosCard nombre="Lineamientos Técnicos" 
   subt="Segunda dosis Varicela."
   image="LT-Varic2021.png" 
   pages="38"
   link="https://drive.google.com/file/d/1ua_XHxFMqxZZeRPgiz37V9reA8PjNDDw/view?usp=sharing"/>

<RecursosCard nombre="Actualizacion 2021 - Lineamientos Técnicos" 
   subt="Octubre 2021."
   image="ActualizLimTec.png" 
   pages="48"
   link="https://drive.google.com/file/d/17bVnPnAy4ffgxx8Sh0taeRRiXJsPyu3o/view?usp=sharing"/>

<RecursosCard nombre="Lineamientos Técnicos Neumococo" 
   subt="2017-2018."
   image="Neumococo.png" 
   pages="25"
   link="https://drive.google.com/file/d/1rUawcsr6vsaDcH67iNsjtuE2EJBEyYNv/view?usp=sharing"/>


<RecursosCard nombre="Lineamientos VPH" 
   subt="2017."
   image="LinVPH2017.png" 
   pages="34"
   link="https://drive.google.com/file/d/1WKpU7DmL2dPk15-u1l59t3fTvrh3yCEg/view?usp=sharing"/>

<RecursosCard nombre="Lineamientos Varicela" 
   subt="2015."
   image="FundamentosVaricela.png" 
   pages="45"
   link="https://drive.google.com/file/d/1KokmtYbjvzVpFVl7gomg__IByDh5zXaQ/view?usp=sharing"/>

<RecursosCard nombre="Lineamientos Rotavirus" 
   subt="2015."
   image="FundamentosRotavirus.png" 
   pages="45"
   link="https://drive.google.com/file/d/18xAoyEAgpRvoNw5bAI0kfwZIBrqbr7JA/view?usp=sharing"/>

<RecursosCard nombre="Lineamientos Neumo Niños" 
   subt="2011."
   image="LinNeumoNi.png" 
   pages="48"
   link="https://drive.google.com/file/d/1OVaeLpeil8-5Ktrjd4mex36FTJQ5VKT2/view?usp=sharing"/>

<RecursosCard nombre="Lineamientos Meningo" 
   subt="2017."
   image="FunMeningo.png" 
   pages="33"
   link="https://drive.google.com/file/d/1HjSkspgD0UaCARLNr14ft6Jb72R2xOUk/view?usp=sharing"/>

<RecursosCard nombre="Lineamientos Hep B Universal" 
   subt="2012."
   image="HepB.png" 
   pages="19"
   link="https://drive.google.com/file/d/1PO_RbUOuL_XZwVIPRDBeq3zNpzRarPj3/view?usp=sharing"/>

                   
   </div>


      <div className="ed-grid s-grid-2 lg-grid-4 xl-grid-6">
      <a name="Memos"></a> 
      <h2 className='s-cols-2 m-cols-4 xl-cols-6'>Memos</h2>           

      <RecursosCard nombre="Memorándum - Covid" 
   subt="Intervalo aplicación dosis refuerzo."
   image="Memo-IntDosis.png" 
   pages="2"
   link="https://drive.google.com/file/d/1blTZOUBojpNku7-aT6-mTy5eCqe2jvqo/view?usp=sharing"/>

<RecursosCard nombre="MEMO VPH dos Dosis" 
   subt="2015."
   image="EsquemaVPH.png" 
   pages="1"
   link="https://drive.google.com/file/d/1aROrlNBsbIqLxaXWuFWY-KOypVQS02H_/view?usp=sharing"/>

<RecursosCard nombre="MEMO Vacunación en el Puerperio" 
   subt="2015."
   image="MemoPuerperio2015.png" 
   pages="2"
   link="https://drive.google.com/file/d/15HQjyU2OYHdkLOKP2-v4OO7AZ6TjybEu/view?usp=sharing"/>

<RecursosCard nombre="MEMO dTpa Embarazadas" 
   subt="2016."
   image="MemoEmbTBA.png" 
   pages="1"
   link="https://drive.google.com/file/d/1lvIF_aAWtlNqdCjvrA-9L7SshfwF-ccO/view?usp=sharing"/>

<RecursosCard nombre="Memo Hepatitis B Embarazadas" 
   subt="2015."
   image="MemoHepBEnb.png" 
   pages="2"
   link="https://drive.google.com/file/d/12Hbw-RUNhWAzUD77rZldYENmU6f_cC38/view?usp=sharing"/>

                      
   </div>
   <div className="ed-grid s-grid-2 lg-grid-4 xl-grid-6">
   <a name="Presentaciones"></a>
      <h2 className='s-cols-2 m-cols-4 xl-cols-6'> Presentaciones (PowerPoint)</h2>           
              
      <RecursosCard nombre="Presentación" 
   subt="Diapositivas - PowerPoint."
   image="Camp-2022-Varic.png" 
   pages="16"
   link="https://docs.google.com/presentation/d/13meVkVSFTA8sh7ntunKprQE61Nih7Z63/edit?usp=sharing&ouid=116373942796959660147&rtpof=true&sd=true"/>
                  
   </div>

   <div className="ed-grid s-grid-2 lg-grid-4 xl-grid-6">
   <a name="Manuales"></a>
      <h2 className='s-cols-2 m-cols-4 xl-cols-6'> Manuales y Guias</h2>           

      <RecursosCard nombre="Guia Rápida" 
   subt="Vacunación Gripe 2022"
   image="gr-AG-2022.jpg" 
   pages="20"
   link="https://drive.google.com/file/d/1eQRND35lNkr3_rNMomWyk6LCXIMgHl_a/view?usp=sharing"/>
        
      <RecursosCard nombre="Plan de contingencia" 
   subt="Ante corte suministro eléctrico."
   image="P-Conting.png" 
   pages="1"
   link="https://drive.google.com/file/d/18bZYeDhRmjtQ-yGH43bPMBVHm1h4K3n_/view?usp=sharing"/>

<RecursosCard nombre="Guia" 
   subt="Rabia: Prevención, Vigilancia y Control."
   image="G-Rabia.png" 
   pages="86"
   link="https://drive.google.com/file/d/1_JrdAXG6kUIiYbqs0R_5osmt_BEmKIJp/view?usp=sharing"/>

<RecursosCard nombre="Manual del Vacunador" 
   subt="Dirección General de Redes y Programas de Salud."
   image="ManualVacunador.png" 
   pages="134"
   link="https://drive.google.com/file/d/1EgB1dE35siNobPGETCc3GNv9jvdvfMi_/view?usp=sharing"/>

<RecursosCard nombre="Dosis Adicional Covid" 
   subt="Actualizacion Noviembre 2021."
   image="DosisExtra2.png" 
   pages="14"
   link="https://drive.google.com/file/d/1aBYLCUHsjUR85Cdfsa5WayVb4ZZFEV7r/view?usp=sharing"/>


<RecursosCard nombre="Ley 27.491" 
   subt=""
   image="LeyVacunas.png" 
   pages="2"
   link="https://drive.google.com/file/d/1XbX5GVAWas2nOwUOjr8ckXEOCds01YHk/view?usp=sharing"/>


<RecursosCard nombre="Vacunación en Huespedes Especiales" 
   subt="2014."
   image="VacHuEsp.png" 
   pages="49"
   link="https://drive.google.com/file/d/1v6UVpMditvW0hgEdBm01BNx4ETzwpjn_/view?usp=sharing"/>


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

                   
   </div>


      <div className="ed-grid s-grid-2 lg-grid-4 xl-grid-6">
      <a name="Circulares"></a>
      <h2 className='s-cols-2 m-cols-4 xl-cols-6'> Circulares</h2>           

      <RecursosCard nombre="2do Refuerzo" 
   subt="18-04-2022"
   image="C-18-4-22.jpg" 
   pages="4"
   link="https://drive.google.com/file/d/1USHagc3iTVsTArEH1Zwuuxi0wi1oAgg1/view?usp=sharing"/>


      <RecursosCard nombre="Antigripal" 
   subt="28-03-2022"
   image="Circ-28-3-22.jpg" 
   pages="1"
   link="https://drive.google.com/file/d/1HW0DcMNfo1eh1nbPi8QWG_4yrmwxEDQX/view?usp=sharing"/>

      
      <RecursosCard nombre="Pautas Vacunación Antigripal" 
   subt="21-03-2022"
   image="circ-21-03-22.jpg" 
   pages="1"
   link="https://docs.google.com/document/d/1I7zy5DHsHx1XGW-ujhobYUL5VoUPJlic/edit?usp=sharing&ouid=116373942796959660147&rtpof=true&sd=true"/>

      <RecursosCard nombre="Dosis Viajeros - Covid" 
   subt="18-03-2022"
   image="Circ-18-03-22.jpg" 
   pages="5"
   link="https://drive.google.com/file/d/14vMFuICFdAyw7EkWkfmv4tkxNMoTN_qz/view?usp=sharing"/>

      <RecursosCard nombre="Circular - Covid" 
   subt="Actualización Estrategia Dosis Refuerzo."
   image="Circ-AcEstr.png" 
   pages="1"
   link="https://drive.google.com/file/d/1IMHw3f3L-NIWVh7cAol53giCTRhk0eQb/view?usp=sharing"/>

      <RecursosCard nombre="Circular - Refuerzo 4ta dosis" 
   subt="7/3/2022"
   image="4tadosis.jpg" 
   pages="1"
   link="https://drive.google.com/file/d/1-CAOmY0rxdU6PLft4RXa1ERM-xTEwGs1/view?usp=sharing"/>

                   
   </div>
   <div className="ed-grid s-grid-2 lg-grid-4 xl-grid-6">
   <a name="Notas"></a>
      <h2 className='s-cols-2 m-cols-4 xl-cols-6'> Notas y resoluciones </h2>           

      <RecursosCard nombre="Extensión de Uso -  COMIRNATY" 
   subt="24/2/2022."
   image="Ext.jpg" 
   pages="1"
   link="https://drive.google.com/file/d/1sVr2wWXIvrhl1XXX5DrmCKZldx_skvkf/view?usp=sharing"/>


   <RecursosCard nombre="Nota" 
   subt="VPH."
   image="Nota-VPH.png" 
   pages="1"
   link="https://docs.google.com/document/d/1TpBpCCf-ZTwcrYgzxCt8RuGlMBTnIMMg/edit?usp=sharing&ouid=116373942796959660147&rtpof=true&sd=true"/>

<RecursosCard nombre="Resolución" 
   subt="2021-3613-APN-MS Varicela."
   image="Res-SegVari.png" 
   pages="3"
   link="https://drive.google.com/file/d/1p5gT_x1aNWqX9DN8Nv_uJh1aOwrO-KcY/view?usp=sharing"/>

                      
   </div>

   <div className="ed-grid s-grid-2 lg-grid-4 xl-grid-6">
   <a name="Plantillas"></a>
      <h2 className='s-cols-2 m-cols-4 xl-cols-6'> Plantillas y Formularios </h2>           

      
      <RecursosCard nombre="Carnet Unificado Vacunación" 
   subt="Niños y Adolescentes"
   image="Carnet-Niños.jpg" 
   pages="2"
   link="https://drive.google.com/file/d/1CvFIRpMNoxwchTNh1BjvLyzS-mSBr8lw/view?usp=sharing"/>

      
      <RecursosCard nombre="Carnet Unificado Vacunación" 
   subt="Adultos"
   image="Carnet-Adultos.jpg" 
   pages="2"
   link="https://drive.google.com/file/d/146eczv0PFJEYu62APWAdnKCw6xsUX9ra/view?usp=sharing"/>

      
      <RecursosCard nombre="Registro y control de temperatura" 
   subt=""
   image="Rct.jpg" 
   pages="1"
   link="https://drive.google.com/file/d/1ZMKNCDTETeOwOsJjpUtBYR5bp8yc1MtW/view?usp=sharing"/>

      <RecursosCard nombre="Planilla Nomivac" 
   subt="Sistema Integrado de Información Sanitaria Argentino."
   image="PanillaNomivac.png" 
   pages="1"
   link="https://drive.google.com/file/d/1gHMhphAGGBZ39koA51BIqYYlOAFPdBWk/view?usp=sharing"/>

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
   
</div>
)

export default CardsRecursos