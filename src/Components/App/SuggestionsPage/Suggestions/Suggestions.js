import React from 'react';
import HeaderBar from './HeaderBar';
import Posts from './Posts';
import styles from './styles.module.css';

function SuggestionsPage({db}) {
    return(
        <section className={styles.container}>
            <HeaderBar/>    
            <Posts db={db}/>
        </section>
    )
}

export default SuggestionsPage;