import React, {useState} from 'react'
import styles from './styles.module.css';

function CategoryInput() {
    const [text, setText] = useState('')

    return(
        <fieldset>
            <h4 className={styles.title}>
                Category
            </h4>
            <p className={styles.desc}>
                Choose a category for your feebback
            </p>
            <select className={styles.selectBox}>
                <option>
                    w
                </option>
            </select>

        </fieldset>
    )
}

export default CategoryInput;