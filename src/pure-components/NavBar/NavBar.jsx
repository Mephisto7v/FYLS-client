import React from 'react'
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'
import panier from '../../assets/panier.png'
import { useNavigate } from 'react-router-dom'
import { CartState } from '../../context/Context'

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

const IconMenu = () => {
    return <div className={styles.logoContainer}>
        <div className={styles.textLogo}>FYLS</div>
    </div>
}

const ConnexionButton = ({children, onClick}) => {
    return <div onClick={onClick} className={styles.conBtn}>
        {children}
    </div>
}

const BulleCart = ({children}) => {
    return <div className={styles.bulleCart}><div className={styles.textCart}>{children}</div></div>
}

const PanierButton = ({children, onClick, lenght}) => {
    return <div onClick={onClick} className={styles.panierBtn}>
        {children}
    </div>
}

const ConnectHello = ({children}) => {
    return <div className={styles.Hello}>
        Bonjour {children}
    </div>
}

const LogContainer = ({children}) =>{
    return <div className={styles.logContainer}>
    {children}
</div>
}
const NavBar = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('User');
        localStorage.removeItem('Admin');
        localStorage.removeItem('Name');
        navigate('/');
        window.location.reload(false);
    }

    const {
        state : {cart},
        dispatch,
    } = CartState();

    return <Container>
    <Link to = '/' style={{ textDecoration: 'none'}}>
        <IconMenu></IconMenu>
    </Link>
    {
            localStorage.getItem('Name') ?
            <ConnectHello>{localStorage.getItem('Name')}</ConnectHello>
            :
            null
        }
    <BtnContainer>
        {localStorage.getItem('User') ? 
        <LogContainer>
            <Link to = '/Catalogue' style={{ textDecoration: 'none'}}>
                <ConnexionButton>Catalogue</ConnexionButton>
            </Link>
            {localStorage.getItem('Admin') == 1 ? 
            <Link to = '/AjoutSneakers' style={{ textDecoration: 'none'}}>
                <ConnexionButton>Administration</ConnexionButton>
            </Link>
            :
            null
            }
            <Link to = '/' style={{ textDecoration: 'none'}}>
                <ConnexionButton onClick={logout}>Log Out</ConnexionButton>
            </Link>
            <Link to = '/Cart' style={{ textDecoration: 'none'}}>
            <PanierButton>
                <BulleCart>
                    {cart.length}
                </BulleCart>
                <img style={{width:'40px'}} src={panier}/>
            </PanierButton>
        </Link>
        </LogContainer>
        :
        <LogContainer>
            <Link to = '/login' style={{ textDecoration: 'none'}}>
                <ConnexionButton>Log In</ConnexionButton>
            </Link>
            <Link to = '/register' style={{ textDecoration: 'none'}}>
                <ConnexionButton>Register</ConnexionButton>
            </Link>
        </LogContainer>
        }
    </BtnContainer>
</Container>
}
export {
	NavBar
}