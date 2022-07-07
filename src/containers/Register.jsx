import React, { useState, useEffect } from 'react'
import { NavBar } from '../pure-components/NavBar/NavBar'
import Background from '../pure-components/Background/Background'
import { Input, Button, FormContainer,Title } from '../pure-components/Login/Login'
import Axios from 'axios';
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
    },
    {
        text: "Prénom",
        type: "text",
        key: "prenom"
    },
    {
        text: "Nom",
        type: "text",
        key: "nom"
    },
    {
        text: "Ville",
        type: "text",
        key: "ville"
    },
    {
        text: "Adresse",
        type: "text",
        key: "adresse"
    }
]

const Register = () => {
    const [data, setData] = useState({})
    const navigate = useNavigate()
    const[verif, setVerif] = useState(false)

    const submitData = async () => {
        if(data.email && data.mdp && data.prenom && data.nom && data.ville && data.adresse){
		    Axios.post("http://localhost:3001/api/AddUser", {
            data : data
            }).then((response) => {
                if(response.data){
                    localStorage.setItem('User',response.data[0].UserID);
                    localStorage.setItem('Admin',response.data[0].admin);
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
        <Title>REGISTER</Title>
        {
                        formData.map(field => {
                                return <Input key={field.key} type={field.type} placeholder={field.text} onChange={(e) => {
                                    setData(prev => {
                                        prev[field.key] = e.target.value
                                        return prev;
                                    })
                                    }
                                }>{field.text} : </Input>
                        })
                    }
            {verif ? <div style={{color:'red'}}>les informations saisit sont incorrect</div> : null}
            <Button onClick={submitData}>S'enregistrer</Button>
        </FormContainer>
    </Background>
}

export default Register