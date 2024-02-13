import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { GoogleMap, useJsApiLoader, MarkerF, InfoWindowF } from '@react-google-maps/api';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { LocationOn } from '@mui/icons-material';
import { renderToString } from 'react-dom/server';
import { theme } from '../../../theme/theme';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { getNorthEastCoordinates, getSouthWestCoordinates } from '../../../redux/features/StoreFilterSlice';

const containerStyle = {
    width: '100%',
    height: '100%'
};

const mapCenter = {
    lat: -41.0,
    lng: 174.0,
}

let bounds = {
    north: -34.0,
    south: -47.0,
    east: 179.0,
    west: 166.0
}

function PhysicalStoresMapView() {
    const [loading, setLoading] = useState(true);
    const [selectedMarker, setSelectedMarker] = useState(null);
    const [zoom, setZoom] = useState(2);
    const markerStoreList = useSelector((state: any) => state.searchFilters.storeList);
    const mapRef = useRef<any>(null);
    const dispatch = useDispatch();

    const handleZoomChanged = () => {
        const newMap = mapRef.current;
        if (newMap) {
            const bounds = newMap.getBounds();

            let NorthEastCordinates = bounds.getNorthEast().toJSON();
            let SouthWestCordinates = bounds.getSouthWest().toJSON();

            dispatch(getNorthEastCoordinates(NorthEastCordinates));
            dispatch(getSouthWestCoordinates(SouthWestCordinates));
        }
    }

    const selectedMarkerData = {
        lat: selectedMarker?.address?.latitude,
        lng: selectedMarker?.address?.longitude
    }

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAV4oc8VL6RXlw64B3x16JMqKqaJitu40Q",
        version: "quaterly",
    })

    setTimeout(() => {
        setLoading(false);
        setZoom(1);
    }, 1000);

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={mapCenter}
            zoom={zoom}
            onLoad={(map) => {
                mapRef.current = map;
                map.addListener("zoom_changed", handleZoomChanged);
            }}
            options={{ restriction: { latLngBounds: bounds, strictBounds: false } }}
        >

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
                                "&:hover .selected-store-name": { color: theme.palette.text.primary, transition: ".5s" }
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

export default PhysicalStoresMapView