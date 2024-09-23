import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";

const Routes = () => {
   return(
       <BrowserRouter>
        <Routes>
           <Route path="/" component = { Home }  />
           <Route path="/sobre" component = { Sobre } />
        </Routes>
       </BrowserRouter>
   )
}

export default Routes;