import React, {useState} from 'react';
import styles from './styles.module.css';
import icons from './Icons';


function UpdateStatus({previousStatus, options}){
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
                <span>
                    {status}
                </span>
                <img src={icons['arrowUp']} className={styles.arrowUp}/>
            </div>
            <div className={styles.popup}>
                {options.map((option) => {
                    return(
                        <div className={styles.option} data-status={option}>
                            {option}<img className={styles.checkMark}/>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default UpdateStatus;