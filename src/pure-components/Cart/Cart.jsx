import React from 'react';
import styles from './Cart.module.css';

const Container = ({children}) => {
    return <div className={styles.Container}>
        {children}
    </div>
}

const CartContainer = ({children}) => {
    return <div className={styles.CartContainer}>
        {children}
    </div>
}

const ProductCard = ({children}) => {
    return <div className={styles.ProductCard}>
    {children}
</div>
}

const ProductIMG = ({path}) => {
    return <img className={styles.ProductIMG} src={path} alt='pas trouver'/>
}

const InfoProductContainer = ({children}) => {
    return <div className={styles.infoProductContainer}>
        {children}
    </div>
}

const EmptyCart = ({children}) => {
    return <div className={styles.EmptyCartContainer}>
        {children}
        <div className={styles.EmptyCartText}> Vous n'avez pas encore de produit dans votre panier </div>
    </div>
}

const NameAndPriceContainer = ({children}) => {
    return <div className={styles.NameAndPriceContainer}>
        {children}
    </div>
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

const ProductQuantity = ({children, add, remove}) => {
    return <div className={styles.Quantity}>
        <div className={styles.Add} onClick={add}>&#43;</div>
        <div className={styles.qty}>{children}</div>
        <div className={styles.Remove} onClick={remove}>&#8722;</div>
    </div>
}

const PaymentInfoContainer = ({children}) => {
    return <div className={styles.PaymentInfoContainer}>
        {children}
    </div>
}

const TotalCount = ({children}) => {
    return <div className={styles.TotalCount}>
        <span style={{fontWeight:'400'}}>Total à payer :</span> {children}
    </div>
}

const PaypalBTN = ({onClick}) => {
    return <div onClick={onClick} className={styles.PaypalBTN}>
        Payer
    </div>
}

export{
    Container,
    CartContainer,
    ProductCard,
    ProductIMG,
    ProductName,
    ProductPrice,
    ProductQuantity,
    PaymentInfoContainer,
    TotalCount,
    PaypalBTN,
    NameAndPriceContainer,
    EmptyCart,
    InfoProductContainer
}