import { Box } from '@mui/material'
import React from 'react'
import AddYourBusiness from './AddYourBusiness'
import WhyShouldYouAdd from './WhyShouldYouAdd'
import BusinessHowItWorks from './BusinessHowItWorks'
import HowMuchCost from './HowMuchCost'
import BusinessOnDealBuddy from '../common-components/BusinessOnDealBuddy'
import MoreQuestions from '../common-components/MoreQuestions'
import EmailSubscription from '../email-subscription/EmailSubscription'
import FAQ from '../common-components/FAQ'

const ListYourBusiness = () => {
    return (
        <>
            <Box className="list-your-business-content">
                <AddYourBusiness />
                <WhyShouldYouAdd />
                <BusinessHowItWorks />
                <HowMuchCost />
                <BusinessOnDealBuddy />
                <FAQ isListBusinessPage />
                <MoreQuestions />
                <EmailSubscription />
            </Box>
        </>
    )
}

export default ListYourBusiness