import React, {useState} from 'react';
import styles from './styles.module.css';
import arrow from './images/icon-arrow-up.svg';


/* i will need to create a popup for the select box */
function SelectBox() {
    const [filter, setFilter] = useState('Most Upvotes')

    return(
        <section className={styles.container}>
            <p className={styles.title}>
                Sort by : &nbsp;
            </p>
            <div className={styles.selectBox}>
                {filter} &nbsp;<img src={arrow} className={styles.arrow}/>
            </div>
        </section>
        )
}

export default SelectBox;