import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SponsoredAdsCards from './SponsoredAdsCards'
import { getSponsorAds } from '../../services/SponsorAdsApi';
import { SponsorAds } from '../../@types/SponsorAds';

const SponsoredAds: React.FC = () => {
    const [apiData, setApiData] = useState<SponsorAds[]>([]);

    const url: string = "sponsored-ads?v=1703163820228&take=12";

    useEffect(() => {
        getSponsorAds(url).then((res) => {
            setApiData(res.data.items)
        });
    }, [])
    console.log("sponsor-ads", apiData);


    return (
        <>
            <Container maxWidth="xl" className='sponsor-container'
                sx={{ bgcolor: "rgba(67, 223, 154, .05)", padding: "40px", display: "block" }}>
                <Box className="sponser-ads-title section-title section-link-title"
                    sx={{
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                        ml: "unset", textAlign: "center", position: "relative", mx: "auto", mb: "24px", px: "62px"
                    }}>
                    <Typography component="h2" sx={{ fontSize: "26px", fontWeight: "900" }}>
                        Sponsored Ads
                    </Typography>
                </Box>
                <Box className="sponsor-main-container-div" sx={{ px: "65px" }}>
                    <Grid container className='sponsor-grid-container'>
                        {
                            apiData.map((item) => {

                                const { id, title, imageUrl, link, shortDescription } = item;

                                return (
                                    <SponsoredAdsCards key={id} title={title} imageUrl={imageUrl} link={link}
                                        shortDescription={shortDescription} id={id} />
                                )
                            })
                        }
                    </Grid>
                </Box>

            </Container>
        </>
    )
}

export default SponsoredAds