import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import './directions.css'

export default function myGoogleMap() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    })

    if (!isLoaded) return <div> Loading... </div>
    return <Map />;
}

function Map() {
    const center = useMemo(() => ({ lat: 44, lng: -88 }), []);

    <GoogleMap mapContainerClassName="google-map" zoom={10} center={center}>
      {" "}
      <Marker position={center} />
    </GoogleMap>;
  }