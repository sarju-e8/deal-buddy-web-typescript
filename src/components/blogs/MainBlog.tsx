import { Container } from '@mui/material'
import React from 'react'
import MainTitle from '../common-components/MainTitle'
import Blogs from './Blogs'

const MainBlog = () => {
    return (
        <Container maxWidth="xl">
            <MainTitle name="Blogs" btnName='View All' />
            <Blogs />
        </Container>
    )
}

export default MainBlog