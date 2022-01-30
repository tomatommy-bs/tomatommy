import React from 'react';
import { Typography } from '@mui/material';

const Heading = ({ children }) => {

    return (
        <>
            <Typography
                variant='h1'
                fontSize={"calc(2rem + 2vw)"}
                textAlign={"center"}
                paddingBottom={"50px"}
            >
                {children}
            </Typography>
        </>
    )
}
export default Heading