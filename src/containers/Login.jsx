import React, { useState, useEffect } from 'react'
import { NavBar } from '../pure-components/NavBar/NavBar'
import Background from '../pure-components/Background/Background'
import { Input, Button, FormContainer, Title } from '../pure-components/Login/Login'
import Axios from 'axios';
import qs from 'qs';
import { useNavigate } from "react-router-dom";

const formData = [
    {
        text: "Email",
        type: "text",
        key: "email"
    },
    {
        text: "Mot de passe",
        type: "password",
        key: "mdp"
    }
]

const Login = () => {
    const [data, setData] = useState({})
    const[verif, setVerif] = useState(false)
    const navigate = useNavigate()

    const submitData = async () => {
	    if(data.email && data.mdp){
            Axios.get("http://localhost:3001/api/VerifyUser", {
            params :{
                data : data
                },
            paramsSerializer: params => {
                return qs.stringify(params)
                }
            })
            .then((response) => {
                if(response.data[0]){
                    localStorage.setItem('User',response.data[0].UserID);
                    localStorage.setItem('Admin',response.data[0].admin);
                    localStorage.setItem('Name',response.data[0].UserFirstName);
                    navigate('/');
                }
                else{
                    setVerif(true);
                }
            })
        }
        else{
            setVerif(true);
        }
    }

    return <Background>
        <NavBar></NavBar>
        <FormContainer>
        <Title>LOGIN</Title>
        {
                        formData.map(field => {
                                return <Input key={field.key} type={field.type} placeholder={field.text} onChange={(e) => {
                                    setData(prev => {
                                        prev[field.key] = e.target.value
                                        return prev;
                                    })
                                    }
                                }/>
                        })
                    }
            {verif ? <div style={{color:'red'}}>l'email ou le mot de passe est incorrect</div> : null}
            <Button onClick={submitData}>Se connecter</Button>
        </FormContainer>
    </Background>
}

export default Login