import React from 'react';
import {collection} from 'firebase/firestore';
import {useNavigate} from 'react-router-dom';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {db} from './../../Firebase';
import styles from './styles.module.css';

function RoadMap() {
    const navigate = useNavigate();
    const collectionRef = collection(db, `posts`);
    const [posts, loading, error] = useCollectionData(collectionRef);

    const goThroughAllPosts = (status) => {
        const filteredPosts = posts.filter((post) => {
            if(post.status == status)
                return true;
            else    
                return false;
        })
        return filteredPosts.length;
    }

    const handleClick = () => {
        navigate('/roadmap');
    }

    return(
            <section className={styles.container}>
                <h3 className={styles.title}>
                    Roadmap
                </h3>
                <a className={styles.viewLink} onClick={handleClick}>
                    View
                </a>
                <div className={styles.status}>
                    <div className={styles.dotOne}></div>
                    <p className={styles.statusTitle}>
                        Planned
                    </p>
                </div>
                <div className={styles.currentNumber}>
                    {loading ? '' : goThroughAllPosts('Planned')}
                </div>
                <div className={styles.status}>
                    <div className={styles.dotTwo}></div>
                    <p className={styles.statusTitle}>
                        In-Progress
                    </p>
                </div>
                <div className={styles.currentNumber}>
                {loading ? '' : goThroughAllPosts('In-Progress')}
                </div>
                <div className={styles.status}>
                    <div className={styles.dotThree}></div>
                    <p className={styles.statusTitle}>
                        Live
                    </p>
                </div>
                <div className={styles.currentNumber}>
                    {loading ? '' : goThroughAllPosts('Live')}
                </div>
            </section>
        )
}

export default RoadMap;