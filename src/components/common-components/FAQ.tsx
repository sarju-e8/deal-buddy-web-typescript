import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Link, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../../theme/theme'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { NavLink } from 'react-router-dom';

interface IFaq {
    isListBusinessPage?: boolean;
}

const FAQ = ({ isListBusinessPage }: IFaq) => {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    // console.log("islistpage", isListBusinessPage);

    return (
        <>
            <Container maxWidth="xl">
                <Box className="faq-page-title"
                    sx={{ textAlign: "center", position: "relative", zIndex: 1, py: "40px" }}>
                    <Typography component="h1"
                        sx={{ ...theme.typography.h2 }}>Frequently Asked Questions</Typography>
                </Box>
                <Box className="faq-question-accordian" sx={{ pl: "55px", pr: "50px" }}>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
                        sx={{
                            background: theme.palette.common.white, boxShadow: "none", borderRadius: "10px!important",
                            border: "1px solid rgba(0,0,0,0.15)", color: theme.palette.common.black, mb: "20px"
                        }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ fontSize: "30px" }} />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{
                                width: '33%', flexShrink: 0, ...theme.typography.subtitle1,
                                color: expanded === 'panel1' ? theme.palette.text.primary : theme.palette.common.black
                            }}>
                                What is DealBuddy?
                            </Typography>
                            {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
                        </AccordionSummary>
                        <AccordionDetails sx={{ py: "16px", px: "20px" }}>
                            <Typography sx={{ ...theme.typography.body1, color: theme.palette.common.black }}>
                                "DealBuddy is a 100% Kiwi-owned company that offers a wide array of money-saving discount codes and promotions available all over New Zealand. We help you get the best local and NZ wide deals. We champion local businesses – and know that people like to grab a deal, so DealBuddy offers a way for customers to get the most out of shopping local, while offering businesses a way to showcase what they do in a cost-effective way. Our aim is to deliver value for money, for both customers and businesses. We're building a better way to shop, one that saves you time and money. Our mission is to deliver value, whether you are a customer or a business. DealBuddy brings together the best savings and discounts, offering great value for shopping – online or in-store."
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    {isListBusinessPage ?
                        <Box className="business-accordion">
                            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
                                sx={{
                                    background: theme.palette.common.white, boxShadow: "none", borderRadius: "10px!important",
                                    border: "1px solid rgba(0,0,0,0.15)", color: theme.palette.common.black, mb: "20px"
                                }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ fontSize: "30px" }} />}
                                    aria-controls="panel2bh-content"
                                    id="panel2bh-header"
                                >
                                    <Typography sx={{
                                        width: '33%', flexShrink: 0, ...theme.typography.subtitle1,
                                        color: expanded === 'panel2' ? theme.palette.text.primary : theme.palette.common.black
                                    }}>
                                        What are the deal uploading guidelines.
                                    </Typography>
                                    {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
                                </AccordionSummary>
                                <AccordionDetails sx={{ py: "16px", px: "20px" }}>
                                    <Typography sx={{ ...theme.typography.body1, color: theme.palette.common.black }}>
                                        <Typography className="accordion-details-desc"
                                            sx={{ mb: "10px", color: "rgb(32,33,36)" }}>
                                            You can start uploading deals once you have registered as a vendor and added your store on DealBuddy.
                                        </Typography>
                                        <Typography className="accordion-details-desc"
                                            sx={{ mb: "10px", color: "rgb(32,33,36)", fontWeight: "bolder" }}>
                                            First of all, you need be a registered NZ business to promote your deals on DealBuddy.
                                        </Typography>
                                        <Typography className="accordion-details-desc"
                                            sx={{ mb: "10px", color: "rgb(32,33,36)" }}>
                                            Here are some guidelines to upload deals, these will help our team to understand your deals and placement of the same:
                                        </Typography>
                                        <Box>
                                            <ul style={{ listStyle: "disc", paddingLeft: "26px" }}>
                                                <li style={{ marginBottom: "12px" }}>Please select all mandatory fields on the deal upload form.</li>
                                                <li style={{ marginBottom: "12px" }}>Write a short description about the deal.</li>
                                                <li style={{ marginBottom: "12px" }}>Please make sure you upload an image for the deal.</li>
                                                <li style={{ marginBottom: "12px" }}>Please contact us if you could not find a category you want to place your deal under and we will add it for you.</li>
                                                <li style={{ marginBottom: "12px" }}>Finally, please make sure you are not posting any offensive or copyright content in your deals, we reserve the right to reject, remove or withdraw deal listings if we notice violations. However, our team will try best to work with you to mitigate issues, if any.</li>
                                            </ul>
                                        </Box>
                                        <Typography className="accordion-details-desc" sx={{ mb: "50px" }}>
                                            Our friendly team is here to support. If you have any question, please feel free to reach out to us via our
                                            <NavLink to="/contact-us" style={{ textDecoration: "inherit" }}><Link sx={{ color: theme.palette.primary.dark, textDecoration: "none" }}> Contact Us </Link></NavLink>
                                            form or send an email to
                                            <Link href="mailto:contact@dealbuddy.co.nz" sx={{ textDecoration: "none", color: theme.palette.primary.dark }}> contact@dealbuddy.co.nz</Link>
                                        </Typography>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}
                                sx={{
                                    background: theme.palette.common.white, boxShadow: "none", borderRadius: "10px!important",
                                    border: "1px solid rgba(0,0,0,0.15)", color: theme.palette.common.black, mb: "20px"
                                }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ fontSize: "30px" }} />}
                                    aria-controls="panel3bh-content"
                                    id="panel3bh-header"
                                >
                                    <Typography sx={{
                                        width: '33%', flexShrink: 0, ...theme.typography.subtitle1,
                                        color: expanded === 'panel3' ? theme.palette.text.primary : theme.palette.common.black
                                    }}>
                                        Do I need to enter my payment details to sign up?
                                    </Typography>
                                    {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
                                </AccordionSummary>
                                <AccordionDetails sx={{ py: "16px", px: "20px" }}>
                                    <Typography sx={{ ...theme.typography.body1, color: theme.palette.common.black }}>
                                        <Typography className="accordion-details-desc"
                                            sx={{ mb: "10px", color: "rgb(32,33,36)" }}>
                                            No, sign up on DealBuddy is completely FREE. We do not ask for any payment information upfront.
                                        </Typography>
                                        <Typography className="accordion-details-desc"
                                            sx={{ mb: "10px", color: "rgb(32,33,36)" }}>
                                            As a vendor, you get a 6 month free trial period to explore DealBuddy, post which you need to purchase a plan to continue using DealBuddy.
                                        </Typography>
                                        <Typography className="accordion-details-desc"
                                            sx={{ mb: "10px", color: "rgb(32,33,36)" }}>
                                            DealBuddy is absolutely free to use for end-customers.
                                        </Typography>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Box>
                        : null}
                </Box>
            </Container>
        </>
    )
}

export default FAQ