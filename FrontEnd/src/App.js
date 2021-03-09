import React from 'react';
import MainContainer from "./containers/MainContainer";
import './App.css';
import L from 'leaflet';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';

class App extends Component {




  
  render(){
    return (
    <>
    <div>
      <h1>
      <span role="img" aria-label="Saltire">🏴󠁧󠁢󠁳󠁣󠁴󠁿 </span>
      Rabbies
      <span role="img" aria-label="bus"> 🚎</span>
      </h1>
    </div>

    <MainContainer />
    </>

  );
}


}
export default App;
