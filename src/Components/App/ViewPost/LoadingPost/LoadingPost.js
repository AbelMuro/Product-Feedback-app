import React from 'react';
import useMediaQuery from './../../ReusableComponents/useMediaQuery';
import {Skeleton} from '@mui/material';

function LoadingPost() {
    const mobile = useMediaQuery('(max-width: 603px)')

    return(
        <Skeleton variant='rounded' height={mobile ? '150px' : '201px'}/>
    )
}

export default LoadingPost;