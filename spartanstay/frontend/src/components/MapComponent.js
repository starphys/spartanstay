import {GoogleMap, useLoadScript} from "@react-google-maps/api";
import Markers from './Markers';
import configInfo from "../config.json"

const defaultMapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

const defaultCenter = {
  lat: 37.3352,
  lng: -121.8811,
}

const defaultZoom = 11;

function MapComponent({mapContainerStyle = defaultMapContainerStyle, center = defaultCenter, zoom = defaultZoom, listings, options}) {
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: configInfo.REACT_APP_GOOGLE_MAPS_API_KEY,
  })

  if(loadError) {return "Error loading maps"} 
  if(!isLoaded) {return "Loading Maps"}

  if(listings) {
    center = {lat:listings[0].coordinate.lat, lng:listings[0].coordinate.lon}
    console.log(listings[0].coordinate)
  }
  return( <div>
    <GoogleMap 
      mapContainerStyle={mapContainerStyle}
      zoom={zoom}
      center={center}
      options={options}>
      {listings ? <Markers listings={listings} /> : "" }
    </GoogleMap>
  </div> );
}

export default MapComponent;