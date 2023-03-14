import React from 'react';
import LogoBox from './LogoBox';
import Filter from './Filter';
import RoadMap from './RoadMap';
import Suggestions from './Suggestions';
import styles from './styles.module.css';

function SuggestionsPage() {
    return(
        <main className={styles.container}>
            <aside className={styles.filterSection}>
                <LogoBox/>
                <Filter/>
                <RoadMap/>
            </aside>
            <Suggestions/> 
        </main>
    )
}

export default SuggestionsPage;