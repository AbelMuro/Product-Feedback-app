import React from 'react';
import useMediaQuery from './../../../../ReusableComponents/useMediaQuery';
import {Skeleton, Stack} from '@mui/material';

function LoadingPosts() {
    const mobile = useMediaQuery('(max-width: 607px)');

    return(
        <Stack spacing={2}>
            <Skeleton variant='rounded' sx={mobile ? {height: '200px'} : {height: '250px'}}/>
            <Skeleton variant='rounded' sx={mobile ? {height: '200px'} : {height: '250px'}}/>
            <Skeleton variant='rounded' sx={mobile ? {height: '200px'} : {height: '250px'}}/>
        </Stack>
    )
}

export default LoadingPosts;