import React, {useEffect, useState} from 'react'
import { NavBar } from '../pure-components/NavBar/NavBar'
import Background from '../pure-components/Background/Background'
import { Container, CartContainer, ProductCard,EmptyCart, ProductIMG,NameAndPriceContainer, ProductName, ProductPrice, ProductQuantity, PaymentInfoContainer, TotalCount, InfoProductContainer} from '../pure-components/Cart/Cart'
import { CartState } from '../context/Context'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import emptyCart from '../assets/empty_cart-512.webp';
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

const Home = () => {
    const {
        state : {cart},
        dispatch,
    } = CartState();

    const navigate = useNavigate();

    let [total, setTotal] = useState(0);
    let [totalQty, setTotalQty] = useState(0);
    let [count, setCount] = useState(0);

    useEffect(() => {
        let tot = 0;
        let totqty = 0;
        cart && cart.map(field => {
            tot = tot + field.ProductPrice*field.qty;
            totqty += field.qty;
        })
        setTotal(tot)
        setTotalQty(totqty)
    },[count])

    const addOneToQty = (field) => {
        const data = cart.find(element => element.ProductID === field.ProductID);
        data.qty++;
        setCount(count+2);
    }

    const removeOneToQty = (field) => {
        const data = cart.find(element => element.ProductID === field.ProductID);
        data.qty--;
        if(data.qty < 1){
            dispatch({
                type: 'RemoveCart',
                payload: field
            });
        }
        setCount(count+2);
    }

    const addDataToBDD = async (cart, UserID, amount, totalQty ) => {
            const allData = {objects: [cart, UserID, amount, totalQty]}
		    Axios.post("http://localhost:3001/api/addOrder", {
            data : allData
            }).then((response) => {
                navigate('/Thanks');
                window.location.reload(false);
            })
            
    }

    return <Background>
        <NavBar></NavBar>
        {
            cart.length>0 ?
            <Container>
            <CartContainer>
                {
                    cart && cart.map(field => {
                        const img = require('../assets/'+ field.ProductImage);
                        return <ProductCard key={field.ProductID}>
                        <InfoProductContainer>
                            <ProductIMG path={img}></ProductIMG>
                            <NameAndPriceContainer>
                                <ProductName>{field.ProductName}</ProductName>
                                <ProductPrice>{field.ProductPrice} €</ProductPrice>
                            </NameAndPriceContainer>
                        </InfoProductContainer>
                            <ProductQuantity add={() => {addOneToQty(field)}} remove={() => {removeOneToQty(field)}}>{field.qty}</ProductQuantity>
                        </ProductCard>
                    })
                }
            </CartContainer>
            <PaymentInfoContainer>
                    <TotalCount>{total} €</TotalCount>
                    <PayPalScriptProvider options={{
                        "client-id":"AbZT4cxEuCQwTZc8IAtfMjqCgTWKlAkCfTyeIFksyu1-4MHmofp3oZI1d5SsauqBb1ay9aFveJGyRF5d",
                        currency:"EUR"
                    }}>
                        <PayPalButtons 
                            createOrder={(data, actions) => {
                                setCount(count+2);
                                return actions.order.create({
                                    purchase_units:[
                                        {
                                            amount : {
                                                value: total,
                                            },
                                        },
                                    ],
                                });
                            }}
                            onApprove={(data, actions) =>{
                                return actions.order.capture().then(function(details) {
                                    addDataToBDD(cart, localStorage.getItem('User'),total, totalQty)
                                })
                            }}
                        />
                    </PayPalScriptProvider>
            </PaymentInfoContainer>
        </Container>
        :
        <EmptyCart><img style={{width:'10%'}} src={emptyCart} alt='pas trouver'/></EmptyCart>
        }
        
    </Background>
}

export default Home