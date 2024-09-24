import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Industry from "./pages/Industry";
import Tree from "./pages/Tree";
import Talk from "./pages/Talk";
import Apresentation from "./pages/Apresentation";
import Project from "./pages/Project";
import Conclusion from "./pages/Conclusion";
import Pwbi from "./pages/Pwbi";

const Routes = () => {
   return(
       <BrowserRouter>
        <Routes>
           <Route path="/" component = { Tree }  />
           <Route path="/industry" component = { Industry } />
           <Route path="/talk" component = { Talk } />
           <Route path="/apresentation" component = { Apresentation } />
           <Route path="/project" component = { Project } />
           <Route path="/conclusion" component = { Conclusion } />
           <Route path="/pwbi" component = { Pwbi } />
        </Routes>
       </BrowserRouter>
   )
}

export default Routes;