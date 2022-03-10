import "../Styles/Styles.scss"
import "../Styles/Clases.css"
import Header from "./Sections/Header"
import Home from "./Pages/Home"
import ContactUs from "./Pages/ContactUs"
import AboutUs from "./Pages/AboutUs"
import Covid from "./Pages/Covid19"
import Capac from "./Pages/Capac"
import Recursos from "./Pages/Recursos"
import Activ from "./Pages/Activ"
import Vac from "./Pages/Vacio"
import Menv from "./Pages/Menv"

import {
      BrowserRouter as Router,
      Routes,
      Route
    } from "react-router-dom";




const App = () => (
      <Router>
            <Header/>
            <Routes>
                  <Route path='/' element={<Home/>} />
                  <Route path='/ContactUs' element={<ContactUs/>} />
                  <Route path='/AboutUs' element={<AboutUs/>} />
                  <Route path='/Recursos' element={<Recursos/>}/>
                  <Route path='/Covid' element={<Covid/>}/>
                  <Route path='/Capac' element={<Capac/>}/>
                  <Route path='/Activ' element={<Activ/>}/>
                  <Route path='/Vac' element={<Vac/>}/>
                  <Route path='/Menv' element={<Menv/>}/>

            </Routes>
      </Router>
     )


export default App
