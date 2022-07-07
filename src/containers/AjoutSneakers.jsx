import React, { useState, useEffect } from 'react'
import Background from '../pure-components/Background/Background'
import { NavBar } from '../pure-components/NavBar/NavBar'
import {FormContainer, Input, InputImg, Button, RightForm, LeftForm, LabelForm, DisplayImg} from '../pure-components/AjoutPaire/AjoutPaire'
import Axios from 'axios';
import { AdministrationButtons } from '../pure-components/AdministrationButtons/AdministrationButtons';

const formData = [
    {
        text: "Nom",
        type: "text",
        key: "nom"
    },
    {
        text: "Prix",
        type: "text",
        key: "prix"
    },
    {
        text: "Stock",
        type: "text",
        key: "stock"
    },
    {
        text: "Description",
        type: "text",
        key: "description"
    }
]

const AjoutBien = () => {
    const [data, setData] = useState({})
    const [fileToDisplay, setfileToDisplay] = useState("")
    const [fileName, setfileName] = useState({})
    const [verif, setVerif] = useState("")

    const submitData = async () => {
		Axios.post("http://localhost:3001/api/insertProduit", {
        data : data, file : fileName
        }).then((response) => {
            if(response.data[0]){
                setVerif("La paire de chaussures a été ajoutée avec succès");
            }
            else{
                setVerif(response.data);
            }
        })
    }
    
    return <Background>    
        <NavBar></NavBar>
        <AdministrationButtons active={1}></AdministrationButtons>
            <FormContainer>
                <LeftForm>
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
                </LeftForm>
                <RightForm>
                    <LabelForm>
                        <InputImg type='file' onChange={(e) => {
                            setfileToDisplay(URL.createObjectURL(e.target.files[0]))
                            setfileName(e.target.files[0].name)
                        }} style={{display:'none'}} accept='image/png, image/jpeg'/>
                    </LabelForm>
                    {
                        fileToDisplay ? <DisplayImg path={fileToDisplay}></DisplayImg> : null
                    }
                    {
                        verif ? 
                        <div style={{color:'red'}}>{verif}</div> 
                        : 
                        null
                    }
                    <Button onClick={submitData}>Enregistrer le produit</Button>
                </RightForm>
            </FormContainer>
        </Background>
}

export default AjoutBien