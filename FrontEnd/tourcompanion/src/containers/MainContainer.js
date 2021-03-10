import React from 'react';
import NavBar from '../components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Map from "./Map"
import MarkerContainer from "./MarkerContainer";


const MainContainer = () => {



    return (
        <Router>
        <>
        <NavBar/>
        {/* <Switch>
            <Route path="/pins" component = {MarkerContainer} />
        </Switch> */}

        <Map/>


        </>
        </Router>
    );
}

export default MainContainer;