import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PinContainer from "./PinContainer";
import MapContainer from "./MapContainer";
import NavBar from "../components/NavBar"

const MainContainer = () => {


 return (
     <Router>
    <>
    <NavBar />
    <Switch>
    <Route path = "/pins" component = {PinContainer} />
    </Switch>
    <div>
        <MapContainer />
    </div>
    </>
    </Router>
 )
}

export default MainContainer;