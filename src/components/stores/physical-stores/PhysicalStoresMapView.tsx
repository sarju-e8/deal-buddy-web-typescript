import React, { useCallback } from 'react'
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%'
};

// const center = {
//     lat: 22.308155,
//     lng: 70.800705,
// };

const markers = [
    {
        id: 1,
        position: {
            lat: 22.811989,
            lng: 70.823616,
        },
    },
    {
        id: 2,
        position: {
            lat: 22.308155,
            lng: 70.800705,
        },
    },
]

const mapCenter = {
    lat: 22.811989,
    lng: 70.823616,
}

function MyComponent() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAV4oc8VL6RXlw64B3x16JMqKqaJitu40Q",
        version: "quaterly",
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        // const bounds = new window.google.maps.LatLngBounds(mapCenter);
        // map.fitBounds(bounds);
        // setMap(map)

        map.setZoom(7)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={mapCenter}
            zoom={13}
            onLoad={onLoad}
        // onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */}
            {
                markers.map((item) => {
                    return (
                        <MarkerF
                            key={item?.id}
                            position={item?.position}
                        />
                    )
                })
            }



        </GoogleMap>
    ) : <></>
}

export default MyComponent