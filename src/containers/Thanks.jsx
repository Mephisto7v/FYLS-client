import React from 'react'
import { NavBar } from '../pure-components/NavBar/NavBar'
import Background from '../pure-components/Background/Background'
import {Thanks} from '../pure-components/Thanks/Thanks'
import ThanksIMG from '../assets/thanks.jfif'

const Thankspage = () => {
    return <Background>
        <NavBar></NavBar>
        <Thanks><img style={{width:'20%'}} src={ThanksIMG} alt='pas trouver'/></Thanks>
    </Background>
}


export default Thankspage