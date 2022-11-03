import React, { useState } from "react";
import { InfoWindowF, MarkerF } from "@react-google-maps/api";
import Listing from "./Listing.js";


function Markers({listings}) {
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  console.log(listings)
  return (<div>
    {listings.map(listing => (
        <MarkerF
          key={listing.id}
          position={{lat:listing.coordinate.lat, lng:listing.coordinate.lon}}
          onClick={() => handleActiveMarker(listing.id)}
        >
          {activeMarker === listing.id ? (
            <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
              <Listing listing={listing}/>
            </InfoWindowF>
          ) : null}
        </MarkerF> ))}</div>);
}

export default Markers;