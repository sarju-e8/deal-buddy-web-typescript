import { Box, Grid } from '@mui/material'
import PopularStoresCards from './PopularStoresCards'

const PopularStores = ({ storeList }) => {
    return (
        <>
            <Box className="stores-main-div" sx={{ px: "65px" }}>
                <Grid container className='stores-grid-container'>
                    {storeList &&
                        storeList.map((item) => {

                            const { id, name, activeDealsCount, address, imageUrl, storeModes, slug } = item;

                            return (
                                <PopularStoresCards id={id} name={name} imageUrl={imageUrl}
                                    activeDealsCount={activeDealsCount} address={address}
                                    storeModes={storeModes} slug={slug} />
                            )
                        })
                    }
                </Grid>
            </Box>
        </>
    )
}

export default PopularStores