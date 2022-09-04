import React, { Component } from 'react';
import RecursosCard from './Recursos-card';
import CampNac from "../Sections/CampNac"
import Covid from "../Sections/covid"

const CardsRecursos = () => (
   <div>
      
   <div className="ed-grid s-grid-3 lg-grid-4 xl-grid-3">
   
   <a className="button light-color " href="#Lineamientos">Lineamientos</a>
      <a className="button light-color " href="#Memos">Memos</a>
      <a className="button light-color s-cols-2 m-cols-1"href="#Presentaciones">Presentaciones (PwP)</a>
      <a className="button light-color " href="#Manuales">Manuales</a>
      <a className="button light-color " href="#Circulares">Circulares</a>
      <a className="button light-color " href="#Notas">Notas/Res.</a>
      <a className="button light-color " href="#Plantillas">Formularios</a>
      {/* <a className="button light-color " href="#extensiones">Extensiones</a> */}
   </div>
   

  
   <div className="ed-grid s-grid-2 lg-grid-4 xl-grid-6">
   
   <a name="extensiones"></a> 
      <h2 className='s-cols-2 m-cols-4 xl-cols-6'> Extensiones de vacunas</h2>           
   
   <RecursosCard nombre="Resumen Vtos c/extensión" 
   subt="Actualizado 1-9-22"
   image="https://drive.google.com/uc?export=download&id=1VjJuSvgB3EjhYeafmAQr1KNKF0j3r3jg" 
   link="https://drive.google.com/file/d/1EvgtV4-u315cfd3SJz6bajx8fzoXZ_pL/view?usp=sharing"/> 
            
      
   <RecursosCard nombre="Extensiones Pfizer Ped." 
   subt="3-8-22."
   image="https://drive.google.com/uc?export=download&id=1QzFYuHWkNZReXF2Q_OzpxQ9k9PNHkyWJ" 
   pages="1"
   link="https://docs.google.com/document/d/1XwsWNpszW7QuZuYBIGX2yeUtI2Wg6QTL/edit?usp=sharing&ouid=116373942796959660147&rtpof=true&sd=true"/> 


      <RecursosCard nombre="Extensión de uso" 
   subt="Antigripal adyuvantada (26-7-22)"
   image="https://drive.google.com/uc?export=download&id=1j2Wv0Ba5L7SwgxrcKhL9Rx3qWqQdqvmO" 
   pages="1"
   link="https://drive.google.com/file/d/15ECcoP4kcRoO6U6Ag6feOnAgBSYIwQsd/view?usp=sharing"/> 
            

      <RecursosCard nombre="Extensiones Vacunas Covid" 
   subt="Al 26-7-22"
   image="https://drive.google.com/uc?export=download&id=1vMMo4CT3wQa725n1bY5PHPZ_809JoI22" 
   pages="5"
   link="https://drive.google.com/file/d/1X2KNAq_PTS9U890zXXZ5nfpLOs7KuhN8/view?usp=sharing"/> 
            
      <RecursosCard nombre="Extencion Sputnik" 
   subt="22-06-2022 (12 meses)"
   image="https://drive.google.com/uc?export=download&id=182pj3VgbxBx6j0eE1_PWhmbQ-iCEqrTs"
   pages="2"
   link="https://drive.google.com/file/d/1sdircXyioFyF4xCCLBvd3iDo58IblPDo/view?usp=sharing"/>
        
      <RecursosCard nombre="Extenciones unificadas" 
   subt="04-06-2022"
   image="https://drive.google.com/uc?export=download&id=1jz8gPoSzFE25hUcU2HcjsYPCawMKdrU7"
   pages="17"
   link="https://drive.google.com/file/d/1DuqU_iPEXKMxijC0cNAEsEtEOyjGuTzD/view?usp=sharing"/>
        
      <RecursosCard nombre="AstraZeneca" 
   subt="27-05-2022"
   image="https://drive.google.com/uc?export=download&id=13SKkoJkxZygWg9yBqF0LTd1j_TZsrX7J" 
   pages="2"
   link="https://drive.google.com/file/d/1kafTfZ-EUwwaXf-BVGyUnxZ_oylbQYAD/view?usp=sharing"/>
        
        <RecursosCard nombre="Moderna" 
   subt="17-05-2022"
   image="https://drive.google.com/uc?export=download&id=1QU6MnPC5GKzOK2Nu-3UlHmvpOn3ipXA8" 
   pages="2"
   link="https://drive.google.com/file/d/1SZ1T9DvLo-1b8cyWrDf14hJWGAwxhCGU/view?usp=sharing"/>
        
      <RecursosCard nombre="Pfizer Adulto" 
   subt="13-04-2022"
   image="https://drive.google.com/uc?export=download&id=1k8m8HrWoAeth72vNtd8cQ7rAZcHCkjO8" 
   pages="1"
   link="https://drive.google.com/file/d/1sK46mxXRDuq15y2XRy4wNlxQ562C3pCJ/view?usp=sharing"/>
        
        <RecursosCard nombre="Pfizer Pediátrica" 
   subt="12-04-2022"
   image="https://drive.google.com/uc?export=download&id=124OdxZ0tqPnZsS53GGzGX7C88LKETIc2" 
   pages="1"
   link="https://drive.google.com/file/d/1sK46mxXRDuq15y2XRy4wNlxQ562C3pCJ/view?usp=sharing"/>

         <RecursosCard nombre="Sputnik (I y II)" 
   subt="03-03-2022"
   image="https://drive.google.com/uc?export=download&id=1lvaBmq35YvpUsVDBuVHKpgJezFZqxUHp" 
   pages="3"
   link="https://drive.google.com/file/d/1ZMeylmFmqpcMwQuH33hO5YO0NRzJWd7-/view?usp=sharing"/>


      <RecursosCard nombre="Pfizer Adulto" 
   subt="24-01-2022"
   image="https://drive.google.com/uc?export=download&id=18H6seVT6DPC0ZO_cQomjzEaooN3kIqN2" 
   pages="1"
   link="https://drive.google.com/file/d/1agBtLtnwChdjuE9ddOnXXiXkF3_3WPyf/view?usp=sharing"/>
                  
   </div>

      <div className="ed-grid s-grid-2 lg-grid-4 xl-grid-6">
      <a name="Lineamientos"></a> 
      <h2 className='s-cols-2 m-cols-4 xl-cols-6'> Lineamientos Técnicos</h2>           
      
      <RecursosCard nombre="Lineamientos Técnicos." 
      subt="Sarampion, Rubeola, Paperas y Poliomielitis."
      image="https://drive.google.com/uc?export=download&id=1OqQFhh42HwJqLuzW7S4TYifmArRYiwrq" 
      link="https://drive.google.com/file/d/1tlV0r17yFZH4M03GhhS5YCFBK6c7hlY0/view?usp=sharing"/> 

      <RecursosCard nombre="(LT) Moderna 6 Meses a 3 años" 
   subt="Refuerzo 3 a 5 años"
   image="https://drive.google.com/uc?export=download&id=1hYsRC-6eha7AC94QrL8q73_HMNo_jfsW"
   pages="32"
   link="https://docs.google.com/document/d/1wXNyQkKTymhq-KPlQaGBosORbswr0405/edit?usp=sharing&ouid=116373942796959660147&rtpof=true&sd=true"/>
           
      <RecursosCard nombre="Lineamientos Técnicos" 
   subt="Primer Refuerzo 5 a 11 Años."
   image="https://drive.google.com/uc?export=download&id=1v5_MgsO5AgoGzcb7hFQ3s4rAy1enyTyI"
   pages="28"
   link="https://drive.google.com/file/d/1r_S0kEiW9ZgidSR_h6rajjJq4HLPv0oL/view?usp=sharing"/>
           
           <RecursosCard nombre="Lineamientos Técnicos" 
   subt="Segundo Refuerzo."
   image="https://drive.google.com/uc?export=download&id=1vJmij8oePphbdDK-JFzlvY6Jh1g1gVsM" 
   pages="30"
   link="https://drive.google.com/file/d/1Jw84c9H-FWBB40skls0eB868Xf3P73xP/view?usp=sharing"/>
        
      <RecursosCard nombre="Lineamientos Técnicos" 
   subt="Segunda dosis Varicela."
   image="https://drive.google.com/uc?export=download&id=1d7SF8Ku_uryrA8orrW_CNTDx96kHnrkm" 
   pages="38"
   link="https://drive.google.com/file/d/1ua_XHxFMqxZZeRPgiz37V9reA8PjNDDw/view?usp=sharing"/>

<RecursosCard nombre="Actualizacion 2021 - Lineamientos Técnicos" 
   subt="Octubre 2021."
   image="https://drive.google.com/uc?export=download&id=1T9FbbMipt9jmCKUvjG3ZZZ_V_TXZJ1Cn" 
   pages="48"
   link="https://drive.google.com/file/d/17bVnPnAy4ffgxx8Sh0taeRRiXJsPyu3o/view?usp=sharing"/>

<RecursosCard nombre="Lineamientos Técnicos Neumococo" 
   subt="2017-2018."
   image="https://drive.google.com/uc?export=download&id=1e-rBXYTYLQ8LxQ_B9GUFqQ20NQqP_N-A" 
   pages="25"
   link="https://drive.google.com/file/d/1rUawcsr6vsaDcH67iNsjtuE2EJBEyYNv/view?usp=sharing"/>


<RecursosCard nombre="Lineamientos VPH" 
   subt="2017."
   image="https://drive.google.com/uc?export=download&id=1kL5ysXnP0j6q49eyPihb1wDiWw8-yNUx" 
   pages="34"
   link="https://drive.google.com/file/d/1WKpU7DmL2dPk15-u1l59t3fTvrh3yCEg/view?usp=sharing"/>

<RecursosCard nombre="Lineamientos Varicela" 
   subt="2015."
   image="https://drive.google.com/uc?export=download&id=1TVDlo3jgttjwuzFLJf_BELdNEDZs8BNw" 
   pages="45"
   link="https://drive.google.com/file/d/1KokmtYbjvzVpFVl7gomg__IByDh5zXaQ/view?usp=sharing"/>

<RecursosCard nombre="Lineamientos Rotavirus" 
   subt="2015."
   image="https://drive.google.com/uc?export=download&id=1MrhYFq0xjUowArP8rZ3OQTu5Q1jd-EAi" 
   pages="45"
   link="https://drive.google.com/file/d/18xAoyEAgpRvoNw5bAI0kfwZIBrqbr7JA/view?usp=sharing"/>

<RecursosCard nombre="Lineamientos Neumo Niños" 
   subt="2011."
   image="https://drive.google.com/uc?export=download&id=1oCZZX4vW0kqpo3Azj8HH6Cpu2TkF8Hg5" 
   pages="48"
   link="https://drive.google.com/file/d/1OVaeLpeil8-5Ktrjd4mex36FTJQ5VKT2/view?usp=sharing"/>

<RecursosCard nombre="Lineamientos Meningo" 
   subt="2017."
   image="https://drive.google.com/uc?export=download&id=1T-lF4yJBVBgekGNNPlnDSj_udJuvOvWp" 
   pages="33"
   link="https://drive.google.com/file/d/1HjSkspgD0UaCARLNr14ft6Jb72R2xOUk/view?usp=sharing"/>

<RecursosCard nombre="Lineamientos Hep B Universal" 
   subt="2012."
   image="https://drive.google.com/uc?export=download&id=1JKo_IrHtPr9FOUqoA-taWBMXEZHRwcT7" 
   pages="19"
   link="https://drive.google.com/file/d/1PO_RbUOuL_XZwVIPRDBeq3zNpzRarPj3/view?usp=sharing"/>

                   
   </div>


      <div className="ed-grid s-grid-2 lg-grid-4 xl-grid-6">
      <a name="Memos"></a> 
      <h2 className='s-cols-2 m-cols-4 xl-cols-6'>Memos</h2>           

      <RecursosCard nombre="Memorándum - Covid" 
   subt="Intervalo aplicación dosis refuerzo."
   image="https://drive.google.com/uc?export=download&id=1dAIJkENUj7J7DvNXJvgW1ZOIIekVzGT_" 
   pages="2"
   link="https://drive.google.com/file/d/1blTZOUBojpNku7-aT6-mTy5eCqe2jvqo/view?usp=sharing"/>

<RecursosCard nombre="MEMO VPH dos Dosis" 
   subt="2015."
   image="https://drive.google.com/uc?export=download&id=1w3NFWfdapj5p_RuaKuZgBSq_Mo9dgWxp" 
   pages="1"
   link="https://drive.google.com/file/d/1aROrlNBsbIqLxaXWuFWY-KOypVQS02H_/view?usp=sharing"/>

<RecursosCard nombre="MEMO Vacunación en el Puerperio" 
   subt="2015."
   image="https://drive.google.com/uc?export=download&id=10fwlViXjMuKuNdRY_d4VinmvP5AGIHny" 
   pages="2"
   link="https://drive.google.com/file/d/15HQjyU2OYHdkLOKP2-v4OO7AZ6TjybEu/view?usp=sharing"/>

<RecursosCard nombre="MEMO dTpa Embarazadas" 
   subt="2016."
   image="https://drive.google.com/uc?export=download&id=1EhfPLsLQheY2VXotdBQDBDKr5_FasL7c" 
   pages="1"
   link="https://drive.google.com/file/d/1lvIF_aAWtlNqdCjvrA-9L7SshfwF-ccO/view?usp=sharing"/>

<RecursosCard nombre="Memo Hepatitis B Embarazadas" 
   subt="2015."
   image="https://drive.google.com/uc?export=download&id=1tcmVS947qJYID0-ezAs8Ua3Jpu_iDqiR" 
   pages="2"
   link="https://drive.google.com/file/d/12Hbw-RUNhWAzUD77rZldYENmU6f_cC38/view?usp=sharing"/>

   </div>
   <div className="ed-grid s-grid-2 lg-grid-4 xl-grid-6">
   <a name="Presentaciones"></a>
      <h2 className='s-cols-2 m-cols-4 xl-cols-6'> Presentaciones (PowerPoint)</h2>           
              
      <RecursosCard nombre="Presentación" 
   subt="Diapositivas - PowerPoint."
   image="https://drive.google.com/uc?export=download&id=1pcKNVkRkRoLxO10zjQ0valS8fzPGfoiN" 
   pages="16"
   link="https://docs.google.com/presentation/d/13meVkVSFTA8sh7ntunKprQE61Nih7Z63/edit?usp=sharing&ouid=116373942796959660147&rtpof=true&sd=true"/>
                  
   </div>

   <div className="ed-grid s-grid-2 lg-grid-4 xl-grid-6">
   <a name="Manuales"></a>
      <h2 className='s-cols-2 m-cols-4 xl-cols-6'> Manuales y Guias</h2> 

      <RecursosCard nombre="Sociedad Arg. de Pediatría." 
   subt="Vac 6 m a 3 años."
   image="https://drive.google.com/uc?export=download&id=1QoiIA4ttQPCCKoVoU2D6DxqFHwlDixJ0"
   pages="8"
   link="https://drive.google.com/file/d/1tq7Shp9oeJGQtAk9h_H_D4AwcvXD27jy/view?usp=sharing"/>
            

      <RecursosCard nombre="Manual Vac. Moderna" 
   subt="6 m a 3 años."
   image="https://drive.google.com/uc?export=download&id=1W318d7MiDcjiSGUUdxKirJrgEwqAnqKv" 
   pages="38"
   link="https://drive.google.com/file/d/1D9ZycOxIfCDShjQ0KedGsFX0EsAM3yu8/view?usp=sharing"/> 
   
   <RecursosCard nombre="Vacunación" 
   subt=" COVID - 19 en NNyA."
   image="https://drive.google.com/uc?export=download&id=1ieStMxXQjklJM8-k4fMF5B6y4ppUlET6" 
   pages="3"
   link="https://drive.google.com/file/d/1jLThGu2ypDjChdshpSkWdzzmZLQj1eVz/view?usp=sharing"/> 
 

      <RecursosCard nombre="Adrenalina para Anafilaxia" 
   subt="Modo de empleo."
   image="https://drive.google.com/uc?export=download&id=1f7j8iOtkFnsmCNg2_c4j5Pn-REdAzOGk" 
   pages="3"
   link="https://drive.google.com/file/d/193L2ogmj6F2bKaizQpZY5xs0yFvMXAws/view?usp=sharing"/>
            
      <RecursosCard nombre="Guia Rápida" 
   subt="Vacunación Gripe 2022"
   image="https://drive.google.com/uc?export=download&id=1HTXC9JrSEkTadmhHU2tPMe0tq-_fGG6M" 
   pages="20"
   link="https://drive.google.com/file/d/1eQRND35lNkr3_rNMomWyk6LCXIMgHl_a/view?usp=sharing"/>
        
      <RecursosCard nombre="Plan de contingencia" 
   subt="Ante corte suministro eléctrico."
   image="https://drive.google.com/uc?export=download&id=1MrC5s1edl57K4EaFvUnLIW6fM9FOGUjZ" 
   pages="1"
   link="https://drive.google.com/file/d/18bZYeDhRmjtQ-yGH43bPMBVHm1h4K3n_/view?usp=sharing"/>

<RecursosCard nombre="Guia" 
   subt="Rabia: Prevención, Vigilancia y Control."
   image="https://drive.google.com/uc?export=download&id=1w2oYCgGaWyO5EGu7wiNocAZ5zIpJfAvR" 
   pages="86"
   link="https://drive.google.com/file/d/1_JrdAXG6kUIiYbqs0R_5osmt_BEmKIJp/view?usp=sharing"/>

<RecursosCard nombre="Manual del Vacunador" 
   subt="Dirección General de Redes y Programas de Salud."
   image="https://drive.google.com/uc?export=download&id=1rEffRwLy_xTWuEUzDD545GB7BG5NskYO" 
   pages="134"
   link="https://drive.google.com/file/d/1EgB1dE35siNobPGETCc3GNv9jvdvfMi_/view?usp=sharing"/>

<RecursosCard nombre="Dosis Adicional Covid" 
   subt="Actualizacion Noviembre 2021."
   image="https://drive.google.com/uc?export=download&id=1ghlSySwpz7I7bXkNL4HPn8XL3MFSAjnV" 
   pages="14"
   link="https://drive.google.com/file/d/1aBYLCUHsjUR85Cdfsa5WayVb4ZZFEV7r/view?usp=sharing"/>


<RecursosCard nombre="Ley 27.491" 
   subt=""
   image="https://drive.google.com/uc?export=download&id=1m2ktjwgvce3btr2eKmQfGLNrYBtIXz5m" 
   pages="2"
   link="https://drive.google.com/file/d/1XbX5GVAWas2nOwUOjr8ckXEOCds01YHk/view?usp=sharing"/>


<RecursosCard nombre="Vacunación en Huespedes Especiales" 
   subt="2014."
   image="https://drive.google.com/uc?export=download&id=1jA49sfMIIQ1cxHTYhsH6zCZnJysWDgD0" 
   pages="49"
   link="https://drive.google.com/file/d/1v6UVpMditvW0hgEdBm01BNx4ETzwpjn_/view?usp=sharing"/>


<RecursosCard nombre="Pfizer Pediátrica" 
   subt="Almacenamiento, manipulación y envío."
   image="https://drive.google.com/uc?export=download&id=1OSFTWha0ZgDPQPUHMg_liPmmipFr8722" 
   pages="16"
   link="https://drive.google.com/file/d/1GyviLEuhAD2z6MatuKwFBLI1JJLmRS0Q/view?usp=sharing"/>

<RecursosCard nombre="Pizer Pediátrica" 
   subt="Cominarty (24/2/22)."
   image="https://drive.google.com/uc?export=download&id=1R3fVge9FtmvpFh0L--ieT9cXqxZPI7Ap" 
   pages="9"
   link="https://drive.google.com/file/d/1_WIryFCzHJstUi9s4GbNV7a-osyGQbpx/view?usp=sharing"/>

                   
   </div>


      <div className="ed-grid s-grid-2 lg-grid-4 xl-grid-6">
      <a name="Circulares"></a>
      <h2 className='s-cols-2 m-cols-4 xl-cols-6'> Circulares</h2>      

               
      <RecursosCard nombre="Moderna Pediátrica." 
      subt="6 m a 2 años."
      image="https://drive.google.com/uc?export=download&id=1z_u4b1pXlOzb68knjpREJ4myAb4ZB5Gv"
      pages="3"
      link="https://drive.google.com/file/d/1rx77OEgbHV_oJAlDpgnYTZn6fRCXBAmL/view?usp=sharing"/>
       

      <RecursosCard nombre="2do Refuerzo" 
   subt="18-04-2022"
   image="https://drive.google.com/uc?export=download&id=1bm-gz5Wa2D1jiQV4hAF__QHpd3Z3yhno" 
   pages="4"
   link="https://drive.google.com/file/d/1USHagc3iTVsTArEH1Zwuuxi0wi1oAgg1/view?usp=sharing"/>


      <RecursosCard nombre="Antigripal" 
   subt="28-03-2022"
   image="https://drive.google.com/uc?export=download&id=1rhA7frzHJ0N_u1_Zn4g_V__Q1kRx6rpy" 
   pages="1"
   link="https://drive.google.com/file/d/1HW0DcMNfo1eh1nbPi8QWG_4yrmwxEDQX/view?usp=sharing"/>

      
      <RecursosCard nombre="Pautas Vacunación Antigripal" 
   subt="21-03-2022"
   image="https://drive.google.com/uc?export=download&id=1G4qS4z7aafCQ3yaLY0O9xKkf9dt6p9FD" 
   pages="1"
   link="https://docs.google.com/document/d/1I7zy5DHsHx1XGW-ujhobYUL5VoUPJlic/edit?usp=sharing&ouid=116373942796959660147&rtpof=true&sd=true"/>

      <RecursosCard nombre="Dosis Viajeros - Covid" 
   subt="18-03-2022"
   image="https://drive.google.com/uc?export=download&id=1P8GvN6O0ba0Ejv8gzEQvM2GZhU_Zhyk_" 
   pages="5"
   link="https://drive.google.com/file/d/14vMFuICFdAyw7EkWkfmv4tkxNMoTN_qz/view?usp=sharing"/>

      <RecursosCard nombre="Circular - Covid" 
   subt="Actualización Estrategia Dosis Refuerzo."
   image="https://drive.google.com/uc?export=download&id=1ZtG7k0qadqupzyx70HM8HTVBpyK8TH_J" 
   pages="1"
   link="https://drive.google.com/file/d/1IMHw3f3L-NIWVh7cAol53giCTRhk0eQb/view?usp=sharing"/>

      <RecursosCard nombre="Circular - Refuerzo 4ta dosis" 
   subt="7/3/2022"
   image="https://drive.google.com/uc?export=download&id=1pGQjVpsIYtX8GXbkkFn9zZmlM6XsIZfq" 
   pages="1"
   link="https://drive.google.com/file/d/1-CAOmY0rxdU6PLft4RXa1ERM-xTEwGs1/view?usp=sharing"/>

                   
   </div>
   <div className="ed-grid s-grid-2 lg-grid-4 xl-grid-6">
   <a name="Notas"></a>
      <h2 className='s-cols-2 m-cols-4 xl-cols-6'> Notas y resoluciones </h2>  

      <RecursosCard nombre="Anmat- Antigripal" 
   subt="Mayores de 65 años."
   image="https://drive.google.com/uc?export=download&id=1oDO3Wqm8umKBMEmhR6s2V_4L7AtjcRrt" 
   pages="3"
   link="https://drive.google.com/file/d/1d4m4U8HPMC9o78k-blSs1keLb8mNrTTA/view?usp=sharing"/> 
            

      <RecursosCard nombre="Extensión de Uso -  COMIRNATY" 
   subt="24/2/2022."
   image="https://drive.google.com/uc?export=download&id=1SY2bvfCdglnERldV0stkafJk9Amym6rU" 
   pages="1"
   link="https://drive.google.com/file/d/1sVr2wWXIvrhl1XXX5DrmCKZldx_skvkf/view?usp=sharing"/>


   <RecursosCard nombre="Nota" 
   subt="VPH."
   image="https://drive.google.com/uc?export=download&id=1GSqKN8FnJ306tt-48VaQcWu8AlME2Gbs" 
   pages="1"
   link="https://docs.google.com/document/d/1TpBpCCf-ZTwcrYgzxCt8RuGlMBTnIMMg/edit?usp=sharing&ouid=116373942796959660147&rtpof=true&sd=true"/>

<RecursosCard nombre="Resolución" 
   subt="2021-3613-APN-MS Varicela."
   image="https://drive.google.com/uc?export=download&id=1E1I57JOlpCOTBhOAxcquBtwmj83HsWRm" 
   pages="3"
   link="https://drive.google.com/file/d/1p5gT_x1aNWqX9DN8Nv_uJh1aOwrO-KcY/view?usp=sharing"/>

                      
   </div>

   <div className="ed-grid s-grid-2 lg-grid-4 xl-grid-6">
   <a name="Plantillas"></a>
      <h2 className='s-cols-2 m-cols-4 xl-cols-6'> Formularios y Planillas </h2>           

      <RecursosCard nombre="Nomivac" 
   subt="Alta usuario"
   image="https://drive.google.com/uc?export=download&id=1S-LsBIZK9zBnBZNHH0fqX-W2JvQYAxmC"
   pages="1"
   link="https://docs.google.com/spreadsheets/d/1lXOHeOPgkz_8z9X11gC9UTRVyRA-T98f/edit?usp=sharing&ouid=116373942796959660147&rtpof=true&sd=true"/>
      
      <RecursosCard nombre="Nomivac" 
   subt="Modificación usuario"
   image="https://drive.google.com/uc?export=download&id=1UCbjiadufbbewFxpY6hEvhwm7yQVAQ2r" 
   pages="1"
   link="https://docs.google.com/spreadsheets/d/1-Zd_Uz8lc2yfWnJQnkSR4LAHtsjg8UTB/edit?usp=sharing&ouid=116373942796959660147&rtpof=true&sd=true"/>
      
      <RecursosCard nombre="Nomivac" 
   subt="Baja usuario"
   image="https://drive.google.com/uc?export=download&id=1rlneNy2aW2BqRVXaBt8YXEP-gTV3IV_b" 
   pages="1"
   link="https://docs.google.com/spreadsheets/d/1s4QQBE4sVrULnbfICN5yoE0sHJuG3v3x/edit?usp=sharing&ouid=116373942796959660147&rtpof=true&sd=true"/>

      <RecursosCard nombre="Carnet Unificado Vacunación" 
   subt="Niños y Adolescentes"
   image="https://drive.google.com/uc?export=download&id=1zWFD5laogxKdlrAG-1-ZA1TDXZtA9bVz" 
   pages="2"
   link="https://drive.google.com/file/d/1CvFIRpMNoxwchTNh1BjvLyzS-mSBr8lw/view?usp=sharing"/>

      
      <RecursosCard nombre="Carnet Unificado Vacunación" 
   subt="Adultos"
   image="https://drive.google.com/uc?export=download&id=1oEAX-dhYmk4C4Y4G17rkFS6nLXY3x8S1" 
   pages="2"
   link="https://drive.google.com/file/d/146eczv0PFJEYu62APWAdnKCw6xsUX9ra/view?usp=sharing"/>

      
      <RecursosCard nombre="Registro y control de temperatura" 
   subt=""
   image="https://drive.google.com/uc?export=download&id=1EZ4cGO3gHtG-LuT0i6-KNdIEGAlEYRUw" 
   pages="1"
   link="https://drive.google.com/file/d/1ZMKNCDTETeOwOsJjpUtBYR5bp8yc1MtW/view?usp=sharing"/>

      <RecursosCard nombre="Planilla Nomivac" 
   subt="Sistema Integrado de Información Sanitaria Argentino."
   image="https://drive.google.com/uc?export=download&id=19-QRzVP764kfK-0DhPnUB0f6VseEaVuz" 
   pages="1"
   link="https://drive.google.com/file/d/1gHMhphAGGBZ39koA51BIqYYlOAFPdBWk/view?usp=sharing"/>

<RecursosCard nombre="Formulario Desvio en Cadena de Frio" 
   subt=""
   image="https://drive.google.com/uc?export=download&id=1LbEnBqUe-xeNl8hji5OfdF0m1f-nt_NE" 
   pages="2"
   link="https://docs.google.com/document/d/1FonhaCJbrqp3qgX27Q6jYng5FBBb63Gn/edit?usp=sharing&ouid=116373942796959660147&rtpof=true&sd=true"/>

<RecursosCard nombre="Planilla de Pedido de Insumos" 
   subt=""
   image="https://drive.google.com/uc?export=download&id=18c017KJOOhugoHuD-gchIEe1WcFxCGXB" 
   pages="3"
   link="https://docs.google.com/document/d/166EjZuHDF8C4QxkUV6upLq6WUPhESpyT/edit?usp=sharing&ouid=116373942796959660147&rtpof=true&sd=true"/>

<RecursosCard nombre="Instructivo ESAVI" 
   subt=""
   image="https://drive.google.com/uc?export=download&id=1Ipeanvh95Hxcfta3VITnKXoIIvM9BTMN" 
   pages="5"
   link="https://drive.google.com/file/d/1XbX5GVAWas2nOwUOjr8ckXEOCds01YHk/view?usp=sharing"/>

                      
   </div>
   
   <CampNac/>
   <Covid/>

</div>
)

export default CardsRecursos