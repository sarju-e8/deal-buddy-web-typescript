import { Box, Container } from '@mui/material'
import React from 'react'
import AreYouCustomer from './AreYouCustomer'
import EmailSubscription from '../email-subscription/EmailSubscription'
import TypesOfOffer from './TypesOfOffer'
import HowToFindOffer from './HowToFindOffer'
import AreYouBusinessOwner from './AreYouBusinessOwner'
import KnowMoreBusiness from './KnowMoreBusiness'
import BusinessOnDealBuddy from '../common-components/BusinessOnDealBuddy'
import MoreQuestions from '../common-components/MoreQuestions'
import FAQ from '../common-components/FAQ'

const HowItWorks = () => {
    return (
        <>
            <Box className="how-its-works-content">
                <AreYouCustomer />
                <TypesOfOffer />
                <HowToFindOffer />
                <AreYouBusinessOwner />
                <KnowMoreBusiness />
                <BusinessOnDealBuddy />
                <FAQ />
                <MoreQuestions />
                <EmailSubscription />
            </Box>
        </>
    )
}

export default HowItWorks