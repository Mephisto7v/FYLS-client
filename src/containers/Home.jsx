import React from 'react'
import { NavBar } from '../pure-components/NavBar/NavBar'
import Background from '../pure-components/Background/Background'
import { Slider } from '../pure-components/Slider/Slider'
import {DownContainer, MiddleContainer, SocialMedia} from '../pure-components/socialComponent/socialComponent'
import instagram from '../assets/instagram.svg'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'

const Home = () => {
    return <Background>
        <NavBar></NavBar>
        <Slider></Slider>
        <MiddleContainer>
            
        </MiddleContainer>
        <DownContainer>
            {[instagram, twitter, facebook].map((reseau,index) => {
                const style = index === 1 ? 'black solid 2px' : ''
                    return <SocialMedia key={index} border={{borderLeft : style, borderRight : style}}>
                    <img src={reseau} alt='pas trouver'/>
                    <div style={{paddingLeft:'20px'}}>FYLS</div>
                </SocialMedia>
                })}
            </DownContainer>
    </Background>
}

export default Home