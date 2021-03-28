import React from 'react';
import styled from 'styled-components';
import { BrandLogo } from '../brandLogo';
import { Marginer } from '../marginer';
import intructorAd from '../../images/instructorAd.png';
import { Button } from '../button';
import { useMediaQuery } from 'react-responsive';
import { deviceSize } from '../responsive';

const InstructorAdContainer = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    background-color: #264653;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        height: 400px;
        border-radius: 3%;
    }
`;

const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        flex-direction: column-reverse;
    }
`;

const SloganContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-right: 12em;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        margin-right: 0;
        align-items: center;
    }
`;

const Slogan = styled.h2`
    margin: 0;
    font-size: 24px;
    color: #fff;
    font-weight: 570;
    line-height: 1.3;
    text-align: start;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        font-size: 15px;
        width: 200px;
        text-align: center;
    }
`;

const StandoutImage = styled.div`
    width: 27em;
    height: 27em;
    opacity: 0.7;
    img {
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: ${deviceSize.mobile}px) {
        width: 16em;
        height: 12em;
    }
`;

export function InstructorAd(props){
    const isMobile = useMediaQuery({maxWidth: deviceSize.mobile});
    return <InstructorAdContainer>
        <ContentContainer>
            <SloganContainer>
                <BrandLogo logoSize={isMobile ? 25 : 42} textSize={isMobile ? 20 : 40} doNotUseGradient />
                <Marginer direction="vertical" margin="1em" />
                <Slogan>You're a Driving Instructor,</Slogan>
                <Slogan>and you have an outstanding</Slogan>
                <Slogan>service to offer?</Slogan>
                <Marginer direction="vertical" margin={10} />
                <Button size={isMobile ? 12 : 16}>Join as Instructor</Button>
            </SloganContainer>
            <StandoutImage>
                <img src={intructorAd} alt="join-as-instructor" />
            </StandoutImage>
        </ContentContainer>
    </InstructorAdContainer>
}