import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { getSliderImage } from '../../services/SliderImageApi';
import { Slider } from '../../@types/Slider';
import { Link } from '@mui/material';
import { getTestSliderData } from '../../services/DealsProductDetailsApi';
import { useSelector } from 'react-redux';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const DealsProductSlider = () => {

    const sliderImages = useSelector((state: any) => state.DealsProductDetails.individualDealProductDetail);
    const dealProductImagesList = sliderImages.productImages;
    // console.log(dealProductImagesList);

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const [apiData, setApiData] = React.useState<Slider[]>([]);
    const maxSteps = dealProductImagesList?.length;

    React.useEffect(() => {
        getTestSliderData().then((res) => {
            // console.log("tets", res.data.photos);
            setApiData(res.data.photos);
        });
    }, [])

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };

    return (
        <Box className="main-slider-div" sx={{ maxWidth: "100%", height: "auto", flexGrow: 1 }}>
            <AutoPlaySwipeableViews className='auto-play-swipe-component'
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
                style={{ width: "110%" }}
            >
                {
                    dealProductImagesList && dealProductImagesList.map((item, index) => {
                        // console.log("imgItem", item, index);
                        return (
                            <>
                                <div key={item.id}>
                                    {Math.abs(activeStep - index) <= 2 ? (

                                        <Box
                                            component="img"
                                            sx={{
                                                height: "524px",
                                                display: 'block',
                                                maxWidth: "100%",
                                                overflow: 'hidden',
                                                width: '100%',
                                                borderRadius: "10px",
                                                position: 'relative',
                                            }}
                                            src={item.imageUrl}
                                            alt={item.id}
                                        />

                                    ) : null}
                                </div>
                            </>
                        )
                    })
                }
            </AutoPlaySwipeableViews>
            {
                // jo api ma 1 karta vadhu image hase to jj left and right slide icons display thase otherwise nay thay
                dealProductImagesList?.length > 1 ?
                    <MobileStepper className='button-component' sx={{ ".MuiMobileStepper-dotActive": { bgcolor: theme.palette.primary.main }, ".MuiMobileStepper-dots": { marginTop: "480px", bgcolor: "#fff", padding: "5px", borderRadius: "10px" }, bgcolor: 'transparent', width: "59.5%", height: "200px", position: 'absolute', top: "300px" }}

                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        nextButton={
                            <Button sx={{
                                color: theme.palette.text.primary, bgcolor: theme.palette.common.white,
                                minWidth: 'auto', borderRadius: "50%", marginRight: "95px"
                            }}
                                size="small"
                                onClick={handleNext}
                                disabled={activeStep === maxSteps - 1}
                            >
                                {/* Next */}
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowLeft />
                                ) : (
                                    <KeyboardArrowRight />
                                )}
                            </Button>
                        }
                        backButton={
                            <Button
                                sx={{
                                    color: theme.palette.text.primary, bgcolor: theme.palette.common.white,
                                    minWidth: 'auto', borderRadius: "50%",
                                }}
                                size="small"
                                onClick={handleBack}
                                disabled={activeStep === 0}>
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowRight />
                                ) : (
                                    <KeyboardArrowLeft />
                                )}
                                {/* Back */}
                            </Button>
                        }
                    />
                    :
                    <></>
            }
        </Box>
    );
}

export default DealsProductSlider