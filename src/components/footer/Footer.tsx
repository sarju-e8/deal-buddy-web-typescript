import { Box, Container, Grid, Link, List, ListItem, Typography } from '@mui/material';
import { footerLogo, footerLogoIcon, facebookIcon, instaIcon, appStore, googlePlayStore } from '../../assets/image_path';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

import React from 'react'
import { FooterLinks } from '../../@types/FooterLinks';

const style = {
    FooterDescription: {
        fontSize: "14px",
        lineHeight: "20px",
    },
    FooterLinksTitle: {
        fontSize: "18px", lineHeight: "28px", fontWeight: 600,
        position: "relative", margin: 0
    },
    FooterLinkLists: {
        padding: 0, marginBottom: 0, listStyleType: "none"
    },
    FooterTermsAndPolicyLinks: {
        padding: "0 16px", color: "black", textDecoration: "none",
        outline: 0, transition: "0.5s"
    },
    FooterFbInstaIcon: {
        padding: "0 10px",
    }
}

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const quickLinksData: FooterLinks[] = [
        {
            id: 1,
            linkName: "Home",
            linkPath: "#",
        },
        {
            id: 2,
            linkName: "About Us",
            linkPath: "#",
        },
        {
            id: 3,
            linkName: "Contact Us",
            linkPath: "#",
        },
        {
            id: 4,
            linkName: "FAQ’s",
            linkPath: "#",
        },
        {
            id: 5,
            linkName: "Blogs",
            linkPath: "#",
        },
    ]

    const generalLinksData: FooterLinks[] = [
        {
            id: 1,
            linkName: "Categories",
            linkPath: "#",
        },
        {
            id: 2,
            linkName: "Stores",
            linkPath: "#",
        },
        {
            id: 3,
            linkName: "Deals",
            linkPath: "#",
        },
        {
            id: 4,
            linkName: "Map",
            linkPath: "#",
        },
        {
            id: 5,
            linkName: "NZ Price Comparision Site",
            linkPath: "#",
        },
    ]

    const FooterCommonLinks = ({ linkName, linkPath }: FooterLinks) => {
        return (
            <>
                <ListItem className='link-content-div' sx={{
                    display: "flex", alignItems: "center", padding: "14px 0", borderBottom: "1px dashed rgba(0, 0, 0, 0.15)"
                }}>
                    <Box className="icon-div">
                        <ChevronRightOutlinedIcon className='chevron-right-icon' sx={{ fontSize: "20px", color: "#43DF9A", display: "flex" }} />
                    </Box>
                    <Link href={linkPath} className='link-name'
                        sx={{
                            paddingLeft: "6px", fontSize: "14px", lineHeight: "20px",
                            fontWeight: 400, color: "black", textDecoration: "none",
                            transition: "0.5s", "&:hover": { color: "#43DF9A" }
                        }}>{linkName}</Link>
                </ListItem >
            </>
        )
    }

    return (
        <>
            <Container maxWidth="xl" className='footer-main-content' sx={{ bgcolor: "rgba(67, 223, 154, 0.05)" }}>
                <Box className='footer-area' sx={{ paddingTop: "50px", marginTop: "40px" }}>
                    <Container maxWidth="lg">
                        <Box className="footer-container-link">
                            <Grid container>
                                <Grid item lg={4} md={4} sm={5} xs={12}>
                                    <Box className="footer-logo-description-div"
                                        sx={{ marginBottom: "50px", paddingRight: "24px" }}>
                                        <Link href="#" className='footer-logo-link'
                                            sx={{ height: "66px", objectFit: "contain" }}>
                                            <Box component="img" src={footerLogo} className='footer-logo'
                                                alt='deal buddy logo' sx={{ marginBottom: "20px" }} />
                                        </Link>
                                        <Typography className='footer-description'
                                            sx={{ ...style.FooterDescription, paddingBottom: "32px" }}>
                                            Dealbuddy aims to help customers discover new experiences and products at the lowest possible prices
                                            and local businesses thrive every day.
                                        </Typography>
                                        <Typography sx={{ ...style.FooterDescription, marginBottom: "16px" }}>
                                            Let's find your perfect deal !!</Typography>

                                        <Box className="footer-app-links"
                                            sx={{ display: "flex", alignItems: "center", gridGap: "10px", gap: "10px" }}>
                                            <Link href="https://apps.apple.com/nz/app/mydealbuddy/id1626704149" target="_blank"
                                                className='app-icon' sx={{ width: "100%", maxWidth: "120px" }}>
                                                <Box component="img" src={appStore} />
                                            </Link>

                                            <Link href="https://play.google.com/store/apps/details?id=com.mydealbuddy&pli=1" target="_blank"
                                                className='app-icon' sx={{ width: "100%", maxWidth: "120px" }}>
                                                <Box component="img" src={googlePlayStore} />
                                            </Link>
                                        </Box>
                                    </Box>

                                </Grid>
                                <Grid item lg={6} md={6} sm={5} xs={12}>
                                    <Box className="footer-quick-links-and-general-div"
                                        sx={{ marginBottom: "50px" }}>
                                        <Grid container>
                                            <Grid item lg={6} md={6} sm={6} xs={12}>
                                                <Box className="quick-links-left"
                                                    sx={{ paddingRight: "30px" }}>
                                                    <Typography variant='h3' className='quick-links-title'
                                                        sx={{
                                                            ...style.FooterLinksTitle
                                                        }}>
                                                        Quick Links
                                                    </Typography>
                                                    <List className='links-list'
                                                        sx={{ ...style.FooterLinkLists }}>

                                                        {
                                                            quickLinksData.map((item) => {
                                                                const { id, linkName, linkPath } = item;
                                                                console.log("qldId", id)
                                                                return <FooterCommonLinks key={id} linkPath={linkPath} linkName={linkName} />
                                                            })
                                                        }
                                                    </List>
                                                </Box>
                                            </Grid>
                                            <Grid item lg={6} md={6} sm={6} xs={12}>
                                                <Box className="quick-links-right" sx={{ paddingLeft: "30px" }}>
                                                    <Typography variant='h3' className='general-links-title'
                                                        sx={{
                                                            ...style.FooterLinksTitle
                                                        }}>
                                                        General
                                                    </Typography>
                                                    <List className='links-list'
                                                        sx={{ ...style.FooterLinkLists }}>
                                                        {
                                                            generalLinksData.map((item) => {
                                                                const { id, linkName, linkPath } = item;
                                                                return <FooterCommonLinks key={id} linkPath={linkPath} linkName={linkName} />
                                                            })
                                                        }
                                                    </List>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Grid>
                                <Grid item lg={2} md={2} sm={2} xs={12}>
                                    <Box className="footer-small-logo"
                                        sx={{ maxWidth: "110px", marginLeft: "auto" }}>
                                        <Box component="img" src={footerLogoIcon} alt='logo icon'
                                            className='small-logo-img' />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                </Box>
            </Container>

            <Container maxWidth="xl" className='footer-copyright-area'
                sx={{ borderTop: "1px solid #e1e2e6", padding: "30px 16px", bgcolor: "rgba(67, 223, 154, 0.05)" }}>
                <Container maxWidth="lg">
                    <Box className="copyright-content-div">
                        <Typography className='copyright-description'
                            sx={{ fontSize: "14px", lineHeight: "20px", margin: 0 }}>
                            Dealbuddy is a registered trademark of Deal Buddy Limited. Third-party trademarks are the property of their respective third-party owners. Presence of a third-party trademark does not mean that dealbuddy has any relationship with that third-party or that the third-party endorses dealbuddy or its services.
                        </Typography>
                        <Box className="footer-inner-content-div"
                            sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "16px" }}>
                            <Typography className='left-footer-text'
                                sx={{ fontSize: "14px", lineHeight: "20px", margin: "0", color: "#00000080" }}>
                                {currentYear} Deal Buddy Limited, All rights reserved.
                            </Typography>
                            <Box className="footer-terms-of-use-and-privacy-policy"
                                sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                <Typography className='right-footer-text'
                                    sx={{
                                        fontSize: "14px", lineHeight: "20px", margin: "0", paddingRight: "24px",
                                        display: "flex", justifyContent: "center", alignItems: "center"
                                    }}>
                                    <Link href='#' className='footer-links'
                                        sx={{ ...style.FooterTermsAndPolicyLinks, "&:hover": { color: "#43DF9A" } }}>
                                        Terms of use</Link>
                                    |
                                    <Link href="#" className='footer-links'
                                        sx={{ ...style.FooterTermsAndPolicyLinks, "&:hover": { color: "#43DF9A" } }}>
                                        Privacy Policy</Link>
                                </Typography>
                                <Box className="footer-fb-insta-icon" sx={{ display: "flex" }}>
                                    <Link href="https://www.facebook.com/dealbuddynz/" target="_blank">
                                        <Box component="img" sx={{ ...style.FooterFbInstaIcon }}
                                            src={facebookIcon} alt="Facebook" className='footer-icon-img' />
                                    </Link>
                                    <Link href="https://www.instagram.com/dealbuddynz/" target="_blank">
                                        <Box component="img" sx={{ ...style.FooterFbInstaIcon }}
                                            src={instaIcon} alt="Instagram" className='footer-icon-img' />
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Container>
        </>
    )
}

export default Footer