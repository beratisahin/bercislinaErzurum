import React from "react";
import "./App.css";
import Navbar from "./components/header/Navbar";
import Foooter from "./components/footer/Foooter";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./components/home/Home.js";
import Hakkimizda from "./components/hakkimizda/Hakkimizda.js";
import Galeri from "./components/galeri/Galeri";
import Fotograf from "./components/galeri/FotografVideo";
import Video from "./components/galeri/FotografVideo";
import Blog from "./components/blog/Blog";
import Iletisim from "./components/iletisim/ContactForm";
import Admin from "./components/admin/Admin";

import Medikal from "./components/hizmetler/MedikalCiltBakimi";
import Tum from "./components/hizmetler/TumVucutLazerEpilasyon";
import Hydrafacial from "./components/hizmetler/HydrafacialCiltBakimi";
import G5 from "./components/hizmetler/G5Masaji";
import KirpikLifting from "./components/hizmetler/EnseYanakBoyunEpilasyon";
import KasLaminasyonu from "./components/hizmetler/BikiniBolgesi";

import Cihazlar from "./components/hizmetler/Urunler";

function App() {
  return (
    <Router>
      <div className="App">
        
       
          
          <div className="col-12 m-0 p-0">
            <Navbar />
          

          <Switch>
            <Route exact path="/" component={Home} /> 
            <Route exact path="/hakkimizda" component={Hakkimizda} />
            <Route exact path="/galeri" component={Galeri} />
            <Route exact path="/fotograflar" component={Fotograf} />
            <Route exact path="/videolar" component={Video} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/iletisim" component={Iletisim} />
            
            <Route exact path="/medikal-cilt-bakimi" component={Medikal}/>
            <Route exact path="/robotx-lazer-epilasyon" component={Tum}/>
            <Route exact path="/hydrafacial-cilt-bakimi" component={Hydrafacial}/>
            <Route exact path="/g5-kavitasyon" component={G5}/>
            <Route exact path="/kirpik-lifting" component={KirpikLifting}/>
            <Route exact path="/kas-laminasyonu" component={KasLaminasyonu}/>

            <Route exact path="/cihazlarimiz" component={Cihazlar}/>


            <Route exact path="/admin" component={Admin} />
           
          </Switch>
          
         
          <hr className="footerHr"/>
          <div className="col-12">
            <Foooter />
          </div>
          
          </div> 
        </div>
      
    </Router>
  );
}

export default App;
