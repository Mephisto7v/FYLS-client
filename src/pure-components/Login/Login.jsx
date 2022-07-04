import React from 'react'
import styles from './Login.module.css'

const Title = ({children}) => {
    return <h1 className={styles.Title}>
        {children}
    </h1>
}

const Input = ({type, onChange, placeholder, accept, children}) => {
    return <div className={type === 'checkbox' ? styles.checkboxContainer : styles.InputContainer}>
        <label className={styles.labelInput}>{children}</label>
        <input className={styles.InputForm} type={type} onChange={onChange} placeholder={placeholder} accept={accept}/>
    </div>
}

const Button = ({onClick, children}) => {
    return <div onClick={onClick} className={styles.btn}>{children}</div>
}

const FormContainer = ({children}) => {
    return <div className={styles.AllContainer}>
            <div className={styles.FormContainer}>
            {children}
            </div>
    </div>
}

export {
    FormContainer,
    Input,
    Button,
    Title
}