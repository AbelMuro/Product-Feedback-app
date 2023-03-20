import React, {useRef} from 'react';
import TitleInput from './../ReusableComponents/TitleInput'
import SelectInput from './../ReusableComponents/SelectInput';
import FeedbackInput from './../ReusableComponents/FeedbackInput';
import styles from './styles.module.css';
import {useNavigate} from 'react-router-dom';
import {doc, setDoc} from 'firebase/firestore'
import {v4 as uuid} from 'uuid'
import images from './images'
import {db} from './../Firebase';


function CreateFeedbackPage(){
    const category = useRef();
    const title = useRef();
    const feedback = useRef();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const categoryChoosen = category.current.state;
        const titleChoosen = title.current.state;
        const feedbackChoosen = feedback.current.state;
        try{
            const postID = uuid();
            const currentDate = new Date();
            const postDoc = doc(db, 'posts', postID);
            await setDoc(postDoc, {
                title: titleChoosen,
                id: postID,
                category: categoryChoosen,
                feedback: feedbackChoosen,
                comments: 0,
                upvotes: 0,
                datePosted: currentDate.getTime(),                                       //returns the number of milliseconds between today and january 1st 1970
                peopleWhoUpvoted: [],
                status: 'planned'
            })
            alert('Post has been submitted')
        }
        catch(error){
            console.log('something happened', error);
        }
        
    }

    const handleClick = () => {
        navigate('/')
    }

    return(
            <main className={styles.container}>
                <a className={styles.goBackLink} onClick={handleClick}>
                    <img src={images['leftArrow']} className={styles.arrowLeft}/>Go Back
                </a>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <img src={images['plus']} className={styles.plus}/>
                    <h1 className={styles.title}>
                        Create New Feedback
                    </h1>
                    <TitleInput ref={title}/>
                    <SelectInput options={['Feature', 'UI', 'UX', 'Enhancement', 'Bug']} defaultState='Feature' ref={category}/>
                    <FeedbackInput ref={feedback}/>
                    <div className={styles.buttons}>
                        <button className={styles.cancelButton} onClick={handleClick}>
                            Cancel
                        </button>
                        <input type='submit' className={styles.feedbackButton} value='Add Feedback'/>
                    </div>

                </form>

            </main>
        )
}

export default CreateFeedbackPage;