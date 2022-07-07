import React from 'react'
import styles from './Thanks.module.css'

const Thanks = ({children}) => {
    return <div className={styles.ThanksContainer}>
        {children}
        <div className={styles.ThanksText}> Merci de nous avoir fait confiance !</div>
    </div>
}

export{
    Thanks
}