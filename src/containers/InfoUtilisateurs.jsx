import React, { useState, useEffect } from 'react'
import Background from '../pure-components/Background/Background'
import { NavBar } from '../pure-components/NavBar/NavBar'
import { Container, UserCard, UserInfo, BtnSupprimer } from '../pure-components/InfoUtilisateurs/InfoUtilisateurs';
import Axios from 'axios';
import { AdministrationButtons } from '../pure-components/AdministrationButtons/AdministrationButtons';

const InfoUtilisateurs = () => {

    const [users, setUsers] = useState();

    useEffect(() => {
        Axios.get("http://localhost:3001/api/getUsers").then((response) => {
        console.log(response.data);
        setUsers(response.data);
    })
    },[])

    const deleteData = (data) => {
        Axios.post("http://localhost:3001/api/deleteUser", {
            data : data
        }).then((res) => {
            if(res.data.affectedRows == 1){
                window.location.reload(false);
                console.log('youyou');
            }
        })
    }

    return <Background>
    <NavBar></NavBar>
    <AdministrationButtons active={3}></AdministrationButtons>
        <Container>
            {
                users && users.map(field => {
                    return <UserInfo key={field.UserID} nom={field.UserLastName} prenom={field.UserFirstName} email={field.UserEmail} ville={field.UserCity}>
                        <BtnSupprimer onClick={() => {
                            deleteData(field.UserID);
                        }}></BtnSupprimer>
                    </UserInfo>
                })
            }
        </Container>
    </Background>
}

export default InfoUtilisateurs