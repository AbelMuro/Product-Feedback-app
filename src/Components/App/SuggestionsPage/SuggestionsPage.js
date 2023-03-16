import React from 'react';
import LogoBox from './LogoBox';
import Filter from './../ReusableComponents/Filter';
import RoadMap from './../ReusableComponents/RoadMap';
import useMediaQuery from '../ReusableComponents/useMediaQuery';
import Suggestions from './Suggestions';
import styles from './styles.module.css';

function SuggestionsPage({db}) {
    const mobile = useMediaQuery('(max-width: 603px)')

    return(
        <main className={styles.container}>
            <aside className={styles.filterSection}>
                <LogoBox/>
                {mobile ? <></> : <Filter/>}
                {mobile ? <></> : <RoadMap/>}
            </aside>
            <Suggestions db={db}/> 
        </main>
    )
}

export default SuggestionsPage;