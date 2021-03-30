import React from 'react';
import styled from 'styled-components';


import logoImg from "../../images/logoDriveBuddy.png"
import { Marginer } from '../marginer';

const BrandLogoContainer = styled.div`
    display: flex;
    align-items: center;
    text-decoration: none;
`;

const LogoImage = styled.div`
    width: ${({ size }) => size ? size + "px" : "2em" };
    height: ${({ size }) => size ? size + "px" : "2em" };
    img {
        width: 100%;
        height: 100%;
    }
`;


const LogoTitle = styled.h2`
    margin: 0;
    font-family: 'Berkshire Swash', cursive;
    font-size: ${({ size }) => size ? size + "px" : "20px" };
    color: ${({ color }) => color ? color : "#fff" };
`;

const GradientTitle = styled.div`
    background-color: #f3ec78;
    font-weight: 900;
    background-image: linear-gradient(#87E6A6,#2ED264, #045C21);
    background-size: 100%;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    color: transparent;
`;


export function BrandLogo(props){
    const { logoSize, textSize, color, hideLogo, doNotUseGradient, image, hideTitle } = props;
    return <BrandLogoContainer>
        {!hideLogo && 
            <LogoImage size={logoSize}>
                <img src={image ? image : logoImg} alt="Drive Buddy Img Logo" />
            </LogoImage> 
        }
        {!hideLogo && 
            <Marginer direction="horizontal" margin={4} />
        }
        {!doNotUseGradient && !hideTitle &&
            <GradientTitle>
                <LogoTitle size={textSize} color={color}>Drive Buddy</LogoTitle>
            </GradientTitle>
        }
        {doNotUseGradient && !hideTitle &&
            <LogoTitle size={textSize} color={color}>Drive Buddy</LogoTitle>
        }
    </BrandLogoContainer>
}