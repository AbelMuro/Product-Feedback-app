import React from 'react';
import Upvotes from './Upvotes';
import styles from './styles.module.css';
import images from './images';

function Posts() {
    return(
        <section className={styles.container}>
            <div>                                       {/* this is only here to enable min-height on a flex item*/}
                <div className={styles.post}>
                    <Upvotes/>
                    <div className={styles.postInfo}>
                        <h3 className={styles.title}>
                            Add tags for solution
                        </h3>
                        <p className={styles.desc}>
                            Easier to search for solutions based on a specific task
                        </p>
                        <div className={styles.category}>
                            Enhancement
                        </div>
                        <div className={styles.commentContainer}>
                            <img src={images['commentBubble']} className={styles.commentIcon}/>
                            2
                        </div>
                        
                    </div>

                </div>                
            </div>


        </section>
        )
}

export default Posts;