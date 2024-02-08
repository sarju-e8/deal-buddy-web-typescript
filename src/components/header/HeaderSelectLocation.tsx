import { Box, Container, Grid, Link, Modal, Stack, Typography } from '@mui/material'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React, { useCallback, useEffect, useState } from 'react'
import { theme } from '../../theme/theme';
import SelectCity from '../select-city-town/SelectCity';
import { useDispatch, useSelector } from 'react-redux';
import { modalOpen, storeQuickLocationData } from '../../redux/features/SelectCitySlice';
import { forwardRef, useRef } from 'react';
import { getQuickLocation } from '../../services/CityListApi';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // maxWidth: 374,
    width: 300,
    // height: "auto",
    bgcolor: theme.palette.common.white,
    border: '1px solid rgba(0,0,0,.2)',
    // boxShadow: 24,
    p: 4,
    borderRadius: "14px",
    display: "flex",
    flexDirection: "column",
    pointerEvents: "auto",
    outline: 0,
};

const HeaderSelectLocation = () => {
    const storeModalOpenValue = useSelector((state: any) => state.SelectCity.isModalOpen);
    const dispatch = useDispatch();

    const handleOpen = useCallback(() => {

        dispatch(modalOpen(true));

        var params = {
            where: {
                quickOption: true,
            },
            order: {
                location: 'ASC',
            },
            take: 8,
        }

        getQuickLocation(params).then((res) => {
            dispatch(storeQuickLocationData(res.data.items));
        });
    }, [])

    const handleClose = () => dispatch(modalOpen(false));

    const currentCityValue = useSelector((state: any) => state.SelectCity.currentCity);

    return (
        <>
            {/* <Container maxWidth="xl">
                <Grid container>
                    <Grid item lg={3} md={3} sm={3} xs={12}> */}
            <Box onClick={handleOpen} sx={{ bgcolor: theme.palette.common.white, borderRadius: 2.5, maxWidth: "180px" }}>
                <Link sx={{ textDecoration: "none", color: theme.palette.common.black, cursor: 'pointer' }} >
                    <Stack direction={'row'} sx={{ px: 1.5, py: 1 }}>
                        <LocationOnOutlinedIcon sx={{ color: theme.palette.text.primary, fontSize: 26 }} />
                        <Typography sx={{ pl: 1, fontSize: theme.typography.paragraph }}>
                            {currentCityValue ? currentCityValue : "NZ Wide"}
                        </Typography>
                        <KeyboardArrowDownIcon sx={{ pl: 3, fontSize: 22 }} />
                    </Stack>
                </Link>
            </Box>

            <Box className='modal-container'>
                {/* <Button onClick={handleOpen}>Open modal</Button> */}
                <Modal
                    open={storeModalOpenValue}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className="modal-inner-details" sx={style}>
                        <SelectCity />
                    </Box>
                </Modal>
            </Box>
            {/* </Grid>
                </Grid>
            </Container> */}
        </>
    )
}

export default HeaderSelectLocation