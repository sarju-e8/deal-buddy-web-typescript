// import { Box, Container, Link } from '@mui/material'
// import { MainDealImage } from '../../assets/image_path'
// import React from 'react'

// const MainImage = () => {
//     return (
//         <>
//             <Link href="https://www.facebook.com/lakesiderotorua/posts/857750106358578?ref=embed_page" target="_blank">
//                 <Box component="img"
//                     src={MainDealImage}
//                     sx={{ width: "100%", height: "524px", display: "block", overflow: "hidden", objectFit: "cover", borderRadius: "10px",  }}
//                     // ml: "-45px"
//                 />
//             </Link>


//         </>
//     )
// }

// export default MainImage

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

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'ABC',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [apiData, setApiData] = React.useState<Slider[]>([]);
  const maxSteps = apiData.length;
  const url: string = 'home-slides?v=1702558604703&where%5Bstatus%5D=active&order%5BcreatedAt%5D=ASC';
  const testUrl: string = 'photos?offset=5&limit=20';

  React.useEffect(() => {
    getSliderImage(testUrl).then((res) => {
      setApiData(res.data.photos);
    });
  }, [])
  // console.log("apidata", apiData);


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
    <Box className="main-slider-div" sx={{ maxWidth: "100%", height: "100%", flexGrow: 1 }}>
      {/* <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper> */}
      <AutoPlaySwipeableViews className='auto-play-swipe-component'
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {
          apiData && apiData.map((item, index) => {
            // console.log("imgItem", item, index);
            return <>
              <div key={item.id}>
                {Math.abs(activeStep - index) <= 2 ? (

                  <Link href={item.url} target="_blank">
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
                      src={item.url}
                      alt={item.id}
                    />
                  </Link>

                ) : null}
              </div>
            </>
          })
        }
        {/* {images.map((step, index) => (
          <div key={step.label}>
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
                src={step.imgPath}
                alt={step.label}
              />

            ) : null}
          </div>
        ))} */}

      </AutoPlaySwipeableViews>
      <MobileStepper className='button-component' sx={{ ".MuiMobileStepper-dotActive": { bgcolor: '#00c86d' }, ".MuiMobileStepper-dots": { marginTop: "450px", bgcolor: "#fff", padding: "5px", borderRadius: "10px" }, bgcolor: 'transparent', width: "55.1%", height: "200px", position: 'absolute', top: "400px" }}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button sx={{ color: '#00c86d', bgcolor: '#fff', minWidth: 'auto', borderRadius: "50%" }}
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
          <Button sx={{ color: '#00c86d', bgcolor: '#fff', minWidth: 'auto', borderRadius: "50%" }} size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            {/* Back */}
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;
