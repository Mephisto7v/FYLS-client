import React, { useEffect, useState } from 'react'
import Background from '../pure-components/Background/Background'
import { NavBar } from '../pure-components/NavBar/NavBar'
import {GridCard,CardContainer,ImgProduct,ProductName,ProductPrice,ProductStock,GoTo} from '../pure-components/Catalogue/Catalogue'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { CartState } from '../context/Context'

const Catalogue = () => {
    const { state } = CartState();

    const[products, setProducts] = useState([]);

    const {
        state : {cart},
        dispatch,
    } = CartState();
    

    useEffect(() => {
        Axios.get("http://localhost:3001/api/getProduct").then((response) => {
        setProducts(response.data);
    })
    },[])

    const navigate = useNavigate();

    const goToPage = (field) =>{
        navigate('/Product',{state : field});
    }

    return <Background>    
        <NavBar></NavBar>
            <GridCard>
                {
                    products && products.map(field => {
                        const img = require('../assets/'+ field.ProductImage);
                        let stock;
                        const element = cart.find(element => element.ProductID === field.ProductID);
                        if(element) stock = (field.ProductStock-element.qty)
                        else stock = (field.ProductStock)
                     return <CardContainer key={field.ProductID}>
                            <ImgProduct path={img}></ImgProduct>
                            <ProductName>{field.ProductName}</ProductName>
                            <ProductPrice>{field.ProductPrice} €</ProductPrice>
                            <ProductStock>Il reste {stock} article{stock>1 ? 's' : null}</ProductStock>
                            <GoTo onClick={() => goToPage(field)}></GoTo>
                    </CardContainer>
                    })
                }
            </GridCard>
    </Background>
}

export default Catalogue