import React from 'react';
import {Skeleton, Stack} from '@mui/material';

function LoadingInputs({size}) {

    return(
        <Stack spacing={1} sx={{marginBottom: '24px'}}>
            <Skeleton variant='rounded' height={'20px'} width={'93px'}/> 
            <Skeleton variant='rounded' height={'20px'} width={'197px'}/> 
            <Skeleton variant='rounded' height={size}/>                      
        </Stack>

    )
}

export default LoadingInputs