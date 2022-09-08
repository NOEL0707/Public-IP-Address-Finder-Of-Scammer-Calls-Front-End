import React, {useState } from 'react';
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet';
import { Marker } from 'react-leaflet';
import { Popup } from 'react-leaflet';
// import { useMapEvents } from 'react-leaflet';
import "../styles/table.css"
function Map(props) {
    const [position, setPosition] = useState([props.latitude,props.longitude])
    // const map = useMapEvents({
    //   onClick() {
    //     map.locate()
    //   },
    //   locationfound(e) {
    //     setPosition(e.latlng)
    //     map.flyTo(e.latlng, map.getZoom())
    //   },
    // })

    return(
        <div className='map-container'>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{
                backgroundColor: "white",
                width:"100%",
                height: "100%",
              }}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                return position === null ? null : (
                    <Marker position={position}>
                      <Popup>You are here</Popup>
                    </Marker>
                  )
            </MapContainer>
        </div>

    );
}

export default Map;
