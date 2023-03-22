import React from 'react';
import {Skeleton} from '@mui/material';
import useMediaQuery from './../../ReusableComponents/useMediaQuery';

function LoadingTitle() {
    const mobile = useMediaQuery('(max-width: 603px)');

    return(
        <Skeleton variant={'rounded'} height='26px' width='300px' sx={mobile ? {margin: 'auto'} : {}}/>
    )
}

export default LoadingTitle;