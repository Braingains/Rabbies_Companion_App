import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PinContainer from "./PinContainer";
import MapContainer from "./MapContainer";

const MainContainer = () => {


 return (
     <Router>
    <>
    <Switch>
    <Route path = "/pins" component = {PinContainer} />
    </Switch>
    <MapContainer />
    </>
    </Router>
 )
}

export default MainContainer;