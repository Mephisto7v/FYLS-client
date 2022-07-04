import React, {useContext, useEffect,useState} from 'react'
import { NavBar } from '../pure-components/NavBar/NavBar'
import Background from '../pure-components/Background/Background'
import { Container, LeftContainer, RightContainer, RightBottomContainer, RightTopContainer, ProductIMG, ProductDescription,AddToCart, ProductName, ProductPrice, ProductStock } from '../pure-components/Product/Product'
import { useLocation } from 'react-router-dom'
import { CartState } from '../context/Context'

const Home = () => {
    const {
        state : {cart},
        dispatch,
    } = CartState();

    console.log(cart);
    const location = useLocation();
    const img = require('../assets/'+ location.state.ProductImage);
    const [stock, setStock] = useState();
    useEffect(() => {
        const element = cart.find(element => element.ProductID === location.state.ProductID);
        if(element)
            setStock(location.state.ProductStock-element.qty)
        else
            setStock(location.state.ProductStock)
    })
    const data = () => {
        const element = cart.find(element => element.ProductID === location.state.ProductID);
        if(data) 
            return location.state.ProductStock-data.qty
        else
            return location.state.ProductStock
    }
    return <Background>
        <NavBar></NavBar>
        <Container>
            <LeftContainer>
                {
                    <ProductIMG path={img}></ProductIMG>
                }
            </LeftContainer>
            <RightContainer>
                <RightTopContainer>
                    <ProductName>{location.state.ProductName}</ProductName>
                    <ProductDescription>{location.state.ProductDescription}</ProductDescription>
                    <ProductStock>Il reste {stock} article{stock>1 && 's'}</ProductStock>
                </RightTopContainer>
                <RightBottomContainer>
                    <ProductPrice>{location.state.ProductPrice} €</ProductPrice>
                    <AddToCart onClick={() => {
                        dispatch({
                            type: 'AddCart',
                            payload:location.state
                        });
                    }}></AddToCart>
                </RightBottomContainer>
            </RightContainer>
        </Container>
    </Background>
}

export default Home