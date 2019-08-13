import React , { useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import geoData from '../../src/data/geo-countries.json';
import config from '../../src/config';

function Map() {
    const [selectedCountry, setSelectedCountry] = useState(null);
    return( 
        <GoogleMap
            defaultZoom={2}
            defaultCenter={{ lat: 37.0902, lng: -95.7129  }}
        >
            {geoData.map(geo => (
                <Marker
                    key={geo.country}
                    position={{ 
                        lat: geo.latitude, 
                        lng: geo.longitude 
                    }}
                    onClick={() =>{
                        setSelectedCountry(geo)
                    }}
                    icon={{
                        url:'./icons/sun-location.png',
                        scaledSize: new window.google.maps.Size(30, 30)
                    }}
                />
            ))}

            {selectedCountry &&(
                <InfoWindow
                    onCloseClick={() =>{
                        setSelectedCountry(null)
                    }}
                    position={{ 
                        lat: selectedCountry.latitude, 
                        lng: selectedCountry.longitude 
                    }}
                >
                    <div>
                        <h3>{selectedCountry.name}</h3>
                    </div>
                </InfoWindow>
            )}
            
        </GoogleMap>
    )
}

const DrawMap = withScriptjs(withGoogleMap(Map));

function MapGeo(){
    return(
        <div style={{ width: "100vw", height: "100vh" }}>
            <DrawMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${config.KEY_GOOGLE_MAPS}`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    )  
}

export default MapGeo;
