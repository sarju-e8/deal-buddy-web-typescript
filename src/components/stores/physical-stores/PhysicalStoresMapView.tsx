import React, { useCallback, useState } from 'react'
import { GoogleMap, useJsApiLoader, MarkerF, InfoWindowF } from '@react-google-maps/api';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { LocationOn } from '@mui/icons-material';
import { renderToString } from 'react-dom/server';
import { theme } from '../../../theme/theme';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const containerStyle = {
    width: '100%',
    height: '100%'
};

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
    // lat: 22.811989,
    // lng: 70.823616,
    lat: -41.0,
    lng: 174.0,
}

let bounds = {
    north: -34.0,
    south: -47.0,
    east: 179.0,
    west: 166.0
}

// const locationOnSvg =  LocationOn({ fontSize: 'large' }).props.children;

const locationOnSvgString = renderToString(<FmdGoodIcon fontSize="large" />);

const locationIconSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      ${locationOnSvgString}
    </svg>
  `;

const locationIconUrl = `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="#00c86d">${locationIconSvg}</svg>`
)}`;

const locationIcon = {
    url: locationIconUrl,

    // scaledSize: new window.google.maps.Size(40, 40),
    // origin: new window.google.maps.Point(0, 0),
    // anchor: new window.google.maps.Point(20, 40),
}

function MyComponent() {
    const [loading, setLoading] = useState(true);
    const [selectedMarker, setSelectedMarker] = useState(null);
    const markerStoreList = useSelector((state: any) => state.searchFilters.storeList);

    const [bounds, setBounds] = useState({
        north: -34.0,
        south: -47.0,
        east: 179.0,
        west: 166.0
    })

    const handleZoomChange = (newZoom, oldZoom) => {
        // Adjust bounds based on the current zoom level
        // You can implement your own logic here to calculate new bounds
        const zoomDelta = newZoom - oldZoom;
        const factor = Math.pow(2, zoomDelta);

        const updatedBounds = {
            north: bounds.north - (bounds.north - bounds.south) * (1 - factor) / 2,
            south: bounds.south + (bounds.north - bounds.south) * (1 - factor) / 2,
            east: bounds.east + (bounds.east - bounds.west) * (1 - factor) / 2,
            west: bounds.west - (bounds.east - bounds.west) * (1 - factor) / 2
        };

        setBounds(updatedBounds);
    };

    const selectedMarkerData = {
        lat: selectedMarker?.address?.latitude,
        lng: selectedMarker?.address?.longitude
    }

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

        map.setZoom(1)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])



    setTimeout(() => {
        setLoading(false);
    }, 1000);
    console.log("selectedMarker", selectedMarker)
    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={mapCenter}
            zoom={2}
            onLoad={onLoad}
            options={{ restriction: { latLngBounds: bounds, strictBounds: false } }}
            // onZoomAnimationStart={({ zoom }) => handleZoomChange(zoom, zoom)}
        // onUnmount={onUnmount}
        >
    { /* Child components, such as markers, info windows, etc. */ }

{
    !loading &&
        markerStoreList && markerStoreList?.map((item) => {
            const storePosition = {
                lat: item?.address?.latitude,
                lng: item?.address?.longitude
            }
            return (
                <MarkerF
                    key={item?.id}
                    position={storePosition}
                    icon={{
                        url: "https://www.dealbuddy.co.nz/assets/img/marker.svg",
                        scaledSize: new window.google.maps.Size(40, 40)
                    }}
                    onClick={() => setSelectedMarker(item)}
                // icon={locationIcon}
                // label={`${item.id}`}
                />
            )
        })
}
{
    selectedMarker?.id ? (
        <InfoWindowF
            key={selectedMarker?.id}
            position={selectedMarkerData}
            onCloseClick={() => setSelectedMarker(null)}
        >
            <NavLink to={`/stores/${selectedMarker?.slug}`} style={{ textDecoration: "inherit" }}>
                <Box sx={{
                    display: "flex", alignItems: "center",
                    "&:hover .selected-store-name": { color: theme.palette.text.primary }
                }}>
                    <Box component="img" src={selectedMarker?.imageUrl} sx={{
                        height: "40px", width: "40px",
                        objectFit: "contain", mr: "12px",
                    }} />
                    <Typography className='selected-store-name' sx={{ color: theme.palette.common.black, fontSize: "13px" }}>{selectedMarker?.name}</Typography>
                </Box>
            </NavLink>
        </InfoWindowF>
    ) : null
}
        </GoogleMap >
    ) : <></>
}

export default MyComponent