<div className="App">
      <h1>Fuck google maps</h1>
      <MapContainer center={[56.355233, -4.07513]} zoom={8}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
      attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a>
       contributors" 
       />

       {mapData.pins.map(pin => (
       <Marker key={pin.id} position={[
         pin.coordinates[0],
         pin.coordinates[1]
       ]}
       onClick={() => {
         setActivePin(pin);
       }}
       />
       ))}

       {activePin && (
       <Popup 
       position={[
        activePin.coordinates[0],
        activePin.coordinates[1]
       ]}>
         <div>
           <h2>HI</h2>
           <p>{activePin.notes}</p>
         </div>
       </Popup>
       )}

</MapContainer>      
      </div>