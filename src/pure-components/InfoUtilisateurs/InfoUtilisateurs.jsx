import styles from './InfoUtilisateurs.module.css'
import react from 'react'

const Container = ({children}) => {
    return <div className={styles.Container}>
        {children}
    </div>
}

const UserCard = ({children}) => {
    return <div className={styles.UserCard}>
        {children}
    </div>
}

const UserInfo = ({children, nom, prenom, email, ville}) =>{
    return <div className={styles.UserInfo}>
        <div className={styles.nom}>{nom}</div>
        <div className={styles.prenom}>{prenom}</div>
        <div className={styles.email}>{email}</div>
        <div className={styles.ville}>{ville}</div>
        {children}
    </div>
}

const BtnSupprimer = ({onClick}) => {
    return <div onClick={onClick} className={styles.BtnSupprimer}>&#9587;</div>
}

export{
    Container,
    UserCard,
    UserInfo,
    BtnSupprimer
}