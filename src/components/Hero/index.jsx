import React , {useState} from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import {HeroContainer , HeroContent , HeroItems , HeroH1 , HeroP , HeroBtn}  from './HeroElements'

 const Hero = () => {

    const [isOpen, setIsOpen] = useState(false)

    const togle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <HeroContainer>
            <Navbar togle={togle} />
            <Sidebar   isOpen={isOpen} handleTogle={togle} />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Greatest Pizza Ever</HeroH1>
                    <HeroP>Ready in 60 seconds</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;