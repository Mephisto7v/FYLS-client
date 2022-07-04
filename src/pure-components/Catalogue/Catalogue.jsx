import React from 'react';
import styles from './Catalogue.module.css'

const GridCard = ({children}) => {
    return <div className={styles.GridCard}>
    {children}
    </div>
}

const CardContainer = ({children}) => {
    return <div className={styles.CardContainer}>
        {children}
    </div>
}

const ImgProduct = ({path}) => {
    return <img className={styles.ImgProduct} src={path} alt='pas trouver'/>
}

const ProductName = ({children}) => {
    return <div className={styles.ProductName}>
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

const GoTo = ({onClick}) => {
    return <div className={styles.GoTo} onClick={onClick}>
        Aller à la page
    </div>
}

export {
    GridCard,
    CardContainer,
    ImgProduct,
    ProductName,
    ProductPrice,
    ProductStock,
    GoTo
}