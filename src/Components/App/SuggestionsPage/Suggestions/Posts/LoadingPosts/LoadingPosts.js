import React from 'react';
import useMediaQuery from './../../../../ReusableComponents/useMediaQuery';
import { Skeleton, Stack } from '@mui/material';
import {styled} from '@mui/system';

function LoadingPosts() {
    const mobile = useMediaQuery('(max-width: 603px)');

    const StyledSkeleton = styled(Skeleton)`
        height: 151px;
    `
    
    return(
        <Stack spacing={2} width={mobile ? '90%' : '100%'} margin='auto'>
            <StyledSkeleton variant='rounded'/>
            <StyledSkeleton variant='rounded'/>
            <StyledSkeleton variant='rounded'/>
        </Stack>
        
    )
}

export default LoadingPosts;