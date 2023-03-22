import React from 'react';
import {Skeleton} from '@mui/material';
import useMediaQuery from '../../../ReusableComponents/useMediaQuery';

function LoadingComments() {
    const mobile = useMediaQuery('(max-width: 603px)')
    
    return(<Skeleton variant='rounded' height={mobile ? '200px' : '300px'}/>)
}

export default LoadingComments;