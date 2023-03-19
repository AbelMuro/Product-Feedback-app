import React, {useState} from 'react';
import styles from './styles.module.css';
import icons from './Icons';

function UpdateStatus({previousStatus}){
    const [status, setStatus] = useState(previousStatus);

    return(
        <section className={styles.container}>
            <h4 className={styles.title}>
                Update Status
            </h4>
            <p className={styles.desc}>
                Change feature state
            </p>
            <div className={styles.selectBox}>
                {status}
                <img src={icons['arrowUp']} className={styles.arrowUp}/>
            </div>
        </section>
    )
}

export default UpdateStatus;