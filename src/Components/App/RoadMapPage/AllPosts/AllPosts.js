import React from 'react';
import StatusPost from './StatusPost';
import StatusBar from './StatusBar';
import styles from './styles.module.css';
import useMediaQuery from '../../ReusableComponents/useMediaQuery';
import {useSelector} from 'react-redux';

function AllPosts() {
    const mobile = useMediaQuery('(max-width: 607px)');
    const status = useSelector(state => state.status);      

    return(
        <section className={styles.container}>
            <StatusBar/>
            <div className={styles.grid}>
                {mobile ? 
                    <>
                        <StatusPost postWithStatus={status}/>
                    </> :
                    <>
                        <StatusPost postWithStatus='Planned'/>
                        <StatusPost postWithStatus='In-Progress'/>
                        <StatusPost postWithStatus='Live'/>                       
                    </>
                }

            </div>   
        </section>
    )
}

export default AllPosts