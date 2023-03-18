import React from 'react';
import HeaderBar from './HeaderBar';
import Posts from './Posts';
import styles from './styles.module.css';

function SuggestionsPage() {
    return(
        <section className={styles.container}>
            <HeaderBar/>    
            <Posts/>
        </section>
    )
}

export default SuggestionsPage;