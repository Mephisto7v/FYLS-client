import React from 'react';
import styles from './Product.module.css';

const Container = ({children}) => {
    return <div className={styles.Container}>
        {children}
    </div>
}

const LeftContainer = ({children}) => {
    return  <div className={styles.LeftContainer}>
        {children}
    </div>
}

const RightContainer = ({children}) => {
    return  <div className={styles.RightContainer}>
        {children}
    </div>
}

const RightTopContainer = ({children}) => {
    return  <div className={styles.RightTopContainer}>
        {children}
    </div>
}

const RightBottomContainer = ({children}) => {
    return  <div className={styles.RightBottomContainer}>
        {children}
    </div>
}

const ProductIMG = ({path}) => {
    return <img className={styles.ProductIMG} src={path} alt='pas trouver'/>
}

const ProductName = ({children}) => {
    return <div className={styles.ProductName}>
        {children}
    </div>
}

const ProductDescription = ({children}) => {
    return <div className={styles.ProductDescription}>
        {children}
    </div>
}

const ProductPrice = ({children}) => {
    return <div className={styles.ProductPrice}>
        {children}
    </div>
}

const ProductStock = ({children}) => {
    return <div className={styles.ProductStock}>
        {children}
    </div>
}

const AddToCart = ({onClick}) => {
    return <div className={styles.AddToCart} onClick={onClick}>
        Ajouter au panier
    </div>
}

export {
    Container,
    LeftContainer,
    RightContainer,
    RightBottomContainer,
    RightTopContainer,
    ProductIMG,
    ProductDescription,
    ProductName,
    ProductPrice,
    ProductStock,
    AddToCart
}