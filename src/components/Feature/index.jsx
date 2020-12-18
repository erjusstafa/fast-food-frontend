import React from 'react'

import {
    FeatureContainer,
    FeatureButton
} from './FeatureElements'

const Feature = ({heading, data}) => {
    return (
        <FeatureContainer>
            <h1>Pizza of the day</h1>
            <p>Truffle alfredosauce topped with 24 karat gold dust.</p>
            <FeatureButton>Order Now</FeatureButton>
            
        </FeatureContainer>
    )
}

export default Feature
