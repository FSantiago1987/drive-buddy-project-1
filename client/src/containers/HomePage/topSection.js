import React from 'react';
import styled from 'styled-components';

import TopSectionBackgroundImg from "../../images/landing-page.jpg";
import BestIntructorsImg from "../../images/best-driver.png";
import { BrandLogo } from '../../components/brandLogo';
import { Marginer } from '../../components/marginer';
import { Button } from '../../components/button';
import { useMediaQuery } from 'react-responsive';
import { deviceSize } from '../../components/responsive';

const TopSectionContainer = styled.div`
    width: 100%;
    height: 700px;
    background:url(${TopSectionBackgroundImg}) no-repeat;
    background-position: 0px -100px;
    background-size: cover;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        background-position: -100px 0px;
        height: 500px;
    }
`;

const BackgroundFilter = styled.div`
   width: 100%;
   height: 100%;
   background-color: rgba(38, 70, 83, 0.8);
   display: flex; 
   flex-direction: column;
`;

const TopSectionInnerContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        justify-content: center;
    }
`;


const StandoutImg = styled.div`
    width: 65em;
    height: 43em;
    margin-left: 5%;
    img {
        width: 100%;
        height: 100%;
        opacity: 0.6;
    }
`;


const LogoContainer = styled.div`
    display: flex;
    align-items: flex-start;
    min-width: 400px;
    flex-direction: column;
    margin-left: 10%;
    margin-top: 5%;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        justify-content: center;
        align-items: center;
        min-width: 200px;
        margin-left: 3%;
    }
`;

const SloganText = styled.h3`
    margin: 0;
    line-height: 1.4;
    color: #fff;
    font-weight: 400;
    font-size: 22px;
    justify-content: flex-start;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        font-size: 24px;
    }
`;


export function TopSection(props){
    const { children } = props;

    const isMobile = useMediaQuery( {maxWidth: deviceSize.mobile });

    return <TopSectionContainer>
        <BackgroundFilter>
            {children}
            <TopSectionInnerContainer>
                <LogoContainer>
                    <BrandLogo logoSize={isMobile ? 50 : 70} textSize={isMobile ? 40 : 47} doNotUseGradient />
                    <Marginer margin={8} direction="vertical" />
                    <SloganText>Find the right driving instructor</SloganText>
                    <SloganText>And get your Driving License</SloganText>
                    <Marginer direction="vertical" margin={20} />
                    <Button>Join Now</Button>
                </LogoContainer>
                {!isMobile && (
                    <StandoutImg>
                        <img src={BestIntructorsImg} alt="DriveBuddy" />
                    </StandoutImg>
                )}
            </TopSectionInnerContainer>
        </BackgroundFilter>
    </TopSectionContainer>
}