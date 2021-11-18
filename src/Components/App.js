import "../Styles/Styles.scss"
import "../Styles/Clases.css"
import Header from "./Sections/Header"
import Home from "./Pages/Home"
import ContactUs from "./Pages/ContactUs"
import AboutUs from "./Pages/AboutUs"

import {
      BrowserRouter as Router,
      Routes,
      Route
    } from "react-router-dom";
import Recursos from "./Pages/Recursos"



const App = () => (
      <Router>
            <Header/>
            <Routes>
                  <Route path='/' element={<Home/>} />
                  <Route path='/ContactUs' element={<ContactUs/>} />
                  <Route path='/AboutUs' element={<AboutUs/>} />
                  <Route path='/Recursos' element={<Recursos/>}/>
            </Routes>
      </Router>
     )


export default App
