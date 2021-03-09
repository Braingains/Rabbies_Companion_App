import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MapContainer from "./MapContainer";
import NavBar from "../components/NavBar"

const MainContainer = () => {


 return (
     <Router>
    <>
    <NavBar />
    <MapContainer />
    </>
    </Router>
 )
}

export default MainContainer;