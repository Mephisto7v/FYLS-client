import React, { useState, useEffect } from 'react'
import Background from '../pure-components/Background/Background'
import { NavBar } from '../pure-components/NavBar/NavBar'
import { Input, Button } from '../pure-components/Login/Login';
import Axios from 'axios';
import { AdministrationButtons } from '../pure-components/AdministrationButtons/AdministrationButtons';

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
    },
    {
        text: "Admin",
        type: "checkbox",
        key: "admin"
    }
]

const AjoutUtilisateur = () => {
    const [data, setData] = useState({})
    const[verif, setVerif] = useState()

    const submitData = async () => {
        if(data.email && data.mdp && data.prenom && data.nom && data.ville && data.adresse){
		    Axios.post("http://localhost:3001/api/AddUser", {
            data : data
            }).then((response) => {
                if(response.data[0]){
                    setVerif("L'utilisateur a bien été enregistré");
                }
                else{
                    setVerif("les informations saisit sont incorrect");
                }
            })
        }
        else{
            setVerif("les informations saisit sont incorrect");
        }
    }

    return <Background>
        <NavBar></NavBar>
        <AdministrationButtons active={2}></AdministrationButtons>
        <div style={{width:'60%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
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
            {verif ? <div style={{color:'red'}}>{verif}</div> : null}
            <Button onClick={submitData}>Enregistrer l'utilisateur</Button>
        </div>
    </Background>
}

export default AjoutUtilisateur