import { Box, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../../theme/theme';
import ButtonComp from './Button';

export interface IProps {
    name: string;
    btnName: string;
}

const MainTitle = (props: IProps) => {
    return (
        <>
            <Box className="popular-sales-title-main-div" sx={{ py: "40px", px: "60px", width: "91.8%" }}>
                <Box sx={{ bgcolor: theme.palette.background.default, borderRadius: "10px", }}>
                    <Box className="popular-sales-title-link" sx={{ p: "24px", display: "flex", alignItems: "center", justifyContent: "space-between", ml: "unset", mb: "24px" }}>
                        <Typography component="h2" sx={{ ...theme.typography.h3, color: "black" }}>{props.name}</Typography>
                        {/* <Link href="#" className="popular-sales-link" sx={{
                            textDecoration: "none", borderRadius: "5px", border: "none", color: "white", padding: "10px 24px", display: "inline-block", background: "linear-gradient(107.73deg,#43df9a 13.88%,#03b465 87.89%)", transition: ".5s", boxShadow: "unset", '&:hover': {
                                color: 'black',
                                background: 'linear-gradient(109.06deg,#faf57e 12.84%,#fef400 87.16%)',
                            }
                        }}>
                            <Typography sx={{ lineHeight: 1.4, fontWeight: 500, fontSize: "14px", textTransform: "capitalize" }}>{props.btnName}</Typography>
                        </Link> */}
                        <ButtonComp name={props.btnName}></ButtonComp>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default MainTitle