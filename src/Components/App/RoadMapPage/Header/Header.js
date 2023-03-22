import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import icons from './Icons';

function Header() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    const handleFeedback = () => {
        navigate('/feedback');
    }

    return(
        <header className={styles.container}>
            <section className={styles.goBackLinkContainer}>
                <a className={styles.goBackLink} onClick={handleClick}>
                    <img src={icons['arrowLeft']} className={styles.arrowLeft}/>
                    Go Back
                </a>
                <h1 className={styles.title}>
                    Roadmap
                </h1>
            </section>
            <button className={styles.addButton} onClick={handleFeedback}>
                + Add Feedback
            </button>
        </header>
        )
}

export default Header;