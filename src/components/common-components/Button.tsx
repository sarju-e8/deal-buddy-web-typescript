import { Typography, Button } from '@mui/material'
import React from 'react'
import { theme } from '../../theme/theme'
import { Buttons } from '../../@types/Buttons'

const ButtonComp = ({ name, sx, customFontSize, customFunctionCall }: Buttons) => {
    return (
        <>
            <Button
                onClick={customFunctionCall}
                className='view-btn'
                sx={{
                    ...sx,
                    borderRadius: "5px", border: "none", color: theme.palette.common.white, padding: "10px 24px", display: "inline-block", background: theme.buttonGradient.greenGradient, transition: ".5s", boxShadow: "unset",
                    '&:hover': {
                        color: theme.palette.common.black,
                        background: theme.buttonGradient.yellowGradient,
                    },
                }}
            >
                <Typography sx={{
                    fontSize: customFontSize ? "20px" : theme.typography.button.fontSize,
                    lineHeight: theme.typography.button.lineHeight,
                    fontWeight: theme.typography.button.fontWeight, textTransform: "capitalize"
                }}>
                    {name}</Typography>
            </Button>
        </>
    )
}

export default ButtonComp