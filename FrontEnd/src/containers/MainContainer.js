import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PinContainer from "./PinContainer";
import MapContainer from "./MapContainer";
import NavBar from "../components/NavBar";
import TestMap from "./TestMap";

const MainContainer = () => {


 return (
     <Router>
    <>
    <NavBar />
    <Switch>
    {/* <Route path = "/pins" component = {PinContainer} /> */}
    </Switch>
    <MapContainer />
    {/* <TestMap/> */}
    </>
    </Router>
 )
}

export default MainContainer;