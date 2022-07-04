import React from 'react'
import styles from './socialComponent.module.css'

const DownContainer = ({children}) => {
    return <div className={styles.DownContainer}>
        {children}
    </div>
}

const SocialMedia = ({children, border}) => {
    return <div className={styles.SocialMedia} style = {border}>
        {children}
    </div>
}

const MiddleContainer = () => {
    return <div className={styles.MiddleContainer}>
        <h2 className={styles.Title}>BIENVENUE CHEZ FYLS</h2>
        <h6>Le site internet où vous trouverez n'importe quelle paire de chaussures à un prix record</h6>
    </div>
}


export {
    MiddleContainer,
    DownContainer, 
    SocialMedia
}