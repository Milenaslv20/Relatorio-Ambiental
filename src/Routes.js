import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Sobre from "./pages/Sobre";
import Industry from "./pages/Industry";
import Tree from "./pages/Tree";

const Routes = () => {
   return(
       <BrowserRouter>
        <Routes>
           <Route path="/" component = { Tree }  />
           <Route path="/industry" component = { Industry } />
           <Route path="/sobre" component = { Sobre } />
        </Routes>
       </BrowserRouter>
   )
}

export default Routes;