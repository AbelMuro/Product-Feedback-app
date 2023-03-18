import React, {useState, useEffect, useRef} from 'react';
import styles from './styles.module.css';

function Upvotes({upvote}){
    const [upvotes, setUpvotes] = useState(upvote);
    const containerRef = useRef();

    const handleClick = (e) => {
        containerRef.current.classList.add(styles.upvoted);
        setUpvotes(upvotes + 1);
    }   

    useEffect(() => {

    }, [upvotes])


    return(
        <section id='upvotes' className={styles.container} onClick={handleClick} ref={containerRef}>
            <div className={styles.arrow}></div>
            {upvotes}
        </section>
        )
}

export default Upvotes;