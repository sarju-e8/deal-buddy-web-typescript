import { Box, Container, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React, { useMemo } from 'react'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import { theme } from '../../theme/theme'
import { Cost } from '../../@types/Cost';

const HowMuchCost = () => {

    const costItemData: Cost[] = useMemo(() => [
        {
            id: 1,
            itemName: "Basic Dashboard"
        },
        {
            id: 2,
            itemName: "Multiple Stores"
        },
        {
            id: 3,
            itemName: "Create and Publish deals instantly"
        },
        {
            id: 4,
            itemName: "Email based support"
        },
        {
            id: 5,
            itemName: "Store listing"
        },
    ], []);

    const CostItemList = ({ itemName }: Cost) => {
        return (
            <Box className="active-deals-highlights"
                sx={{
                    display: "flex", alignItems: "center", textAlign: "left",
                    mb: "10px",
                }}>
                <CheckCircleOutlineOutlinedIcon sx={{
                    fontSize: "18px", color: theme.palette.text.primary,
                    pl: "4px", pr: "6px"
                }} />
                <Typography sx={{
                    px: "6px",
                    ...theme.typography.body2,
                }}>{itemName}</Typography>
            </Box>
        )
    }

    return (
        <Container maxWidth="lg" sx={{ pb: "40px" }}>
            <Box className="business-owner-title"
                sx={{ textAlign: "center", position: "relative", zIndex: 1, py: "40px" }}>
                <Typography component="h1" sx={{ ...theme.typography.h2 }}>
                    How Much does it cost ?
                </Typography>
                <Typography sx={{ mt: "12px", opacity: 0.95, ...theme.typography.paragraph }}>
                    Nothing! Yes, it costs nothing to list your store and deals on DealBuddy.
                </Typography>
            </Box>

            <Box className="row">
                <Grid container sx={{ display: "flex", justifyContent: "center", margin: "auto 0" }}>
                    <Grid item lg={3} md={2} sx={{ maxWidth: "20%!important" }}>
                        <Box className="cost-card"
                            sx={{
                                height: "auto", textAlign: "center", background: theme.palette.background.paper,
                                borderRadius: "16px", padding: "20px 16px",
                            }}>
                            <Box className="pricing-item" sx={{ ml: "6px", p: "3px 6px" }}>
                                <Box className="active-deals-highlights"
                                    sx={{
                                        display: "flex", alignItems: "center", p: "6px 0", textAlign: "left",
                                        mb: "4px",
                                    }}>
                                    <CheckCircleOutlineOutlinedIcon sx={{
                                        fontSize: "18px", color: theme.palette.text.primary,
                                        pl: "4px", pr: "6px"
                                    }} />
                                    < Typography sx={{
                                        bgcolor: theme.palette.secondary.main, px: "6px",
                                        ...theme.typography.body2, borderRadius: "3px"
                                    }}>Up to 50 active deals</Typography>
                                </Box>
                                <Box className="inner-html">
                                    {
                                        costItemData.map((item) => {
                                            const { id, itemName } = item;
                                            return (
                                                <CostItemList key={id} id={id} itemName={itemName} />
                                            )
                                        })
                                    }
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default HowMuchCost