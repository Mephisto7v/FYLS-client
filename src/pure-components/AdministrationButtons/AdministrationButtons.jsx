import React from 'react'
import styles from './Administration.module.css'
import { Link } from 'react-router-dom'

const Container = ({children}) => {
    return <div className={styles.container}> 
        {children}
    </div>
}

const BtnContainer = ({children}) => {
    return <div className={styles.btnContainer}>
        {children}
    </div>
}

const Btn = ({children, onClick}) => {
    return <div onClick={onClick} className={styles.Btn}>
        {children}
    </div>
}

const BtnActive = ({children, onClick}) => {
    return <div onClick={onClick} className={styles.BtnActive}>
        {children}
    </div>
}

const AdministrationButtons = ({active}) => {
    return <Container>
        {
            active === 1 && 
            <BtnContainer>
            <Link to = '/AjoutSneakers' style={{ textDecoration: 'none'}}>
                <BtnActive>Ajouter un produit</BtnActive>
            </Link>
            <Link to = '/AjoutUtilisateur' style={{ textDecoration: 'none'}}>
                <Btn>Ajouter des utilisateurs</Btn>
            </Link>
            <Link to = '/InfoUtilisateurs' style={{ textDecoration: 'none'}}>
                <Btn>Information sur les utilisateurs</Btn>
            </Link>
            </BtnContainer>
        }
        {
            active === 2 &&
            <BtnContainer>
            <Link to = '/AjoutSneakers' style={{ textDecoration: 'none'}}>
                <Btn>Ajouter un produit</Btn>
            </Link>
            <Link to = '/AjoutUtilisateur' style={{ textDecoration: 'none'}}>
                <BtnActive>Ajouter des utilisateurs</BtnActive>
            </Link>
            <Link to = '/InfoUtilisateurs' style={{ textDecoration: 'none'}}>
                <Btn>Information sur les utilisateurs</Btn>
            </Link>
            </BtnContainer>
        }
        {
            active === 3 &&
            <BtnContainer>
            <Link to = '/AjoutSneakers' style={{ textDecoration: 'none'}}>
                <Btn>Ajouter un produit</Btn>
            </Link>
            <Link to = '/AjoutUtilisateur' style={{ textDecoration: 'none'}}>
                <Btn>Ajouter des utilisateurs</Btn>
            </Link>
            <Link to = '/InfoUtilisateurs' style={{ textDecoration: 'none'}}>
                <BtnActive>Information sur les utilisateurs</BtnActive>
            </Link>
            </BtnContainer>
        }
</Container>
}
export {
	AdministrationButtons
}