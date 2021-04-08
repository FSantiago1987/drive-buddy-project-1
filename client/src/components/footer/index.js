import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { BrandLogo } from '../brandLogo';
import { Marginer } from '../marginer';
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import footerLogo from "../../images/driveBuddy.png";
import { deviceSize } from '../responsive';
import { useMediaQuery } from 'react-responsive';

const FooterContainer = styled.div`
    font-family: Noto Sans SC;
    width: 100%;
    min-height: 270px;
    display: flex;
    flex-direction: column;
    padding: 2em 3em;
    padding-bottom: 0;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        border-top: 0;
        padding: 0;
        min-height: 20px;
    }
`;

const TopContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 180px;


    &:not(:last-of-type) {
        margin-right: 8%;
    }

    @media screen and (max-width: ${deviceSize.mobile}px) {
        margin-right: 0;
        width: 100%;
    }
`;

const BottomContainer = styled.div`
    font-size: 11px;
    color: #a3a3a3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    border-top: 0.6px solid rgba(0, 0, 0, 0.3);
    padding: 0 100px;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        height: 20px;
        padding: 10px 10px ;
    }
    
`;

const RightContainer = styled.div`
    display:flex;
`;

const LeftContainer = styled.div`
    display:flex;
`;

const Title = styled.h2`
    margin: 0;
    margin-bottom: 13px;
    color: #000;
    font-weight: 600;
    font-size: 16.5px;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        font-size: 13px;
    }
`;

const FooterLink = styled.a`
    text-decoration: none;
    color: #8a8a8a;
    font-weight: 500;
    font-size: 14.3px;
    cursor: pointer;
    transition: background-color, 200ms ease-in-out;
    
    &:not(:last-of-type){
        margin-bottom: 8px;
    }

    &:hover {
        color: #777777;
    }

    @media screen and (max-width: ${deviceSize.mobile}px) {
        font-size: 12px;
        align-items: flex-start;
    }
`;

const PrivacyText = styled.h6`
    color: #a3a3a3;
    font-size: 11px;
    margin-left: 10px;
    font-weight: 400;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        font-size: 8px;
        font-weight: 300;
    }
`;

const SocialIcon = styled.div`
    color: #8a8a8a;
    font-size: 20px;
    cursor: pointer;
    transition: background-color, 200ms ease-in-out;

    &:not(:last-of-type){
        margin-right: 10px;
    }

    &:hover {
        color: #777777;
    }

    @media screen and (max-width: ${deviceSize.mobile}px) {
        margin-right: 2px;
        font-size: 14px;
    }
`;

export function Footer(props){
    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile});
    return <FooterContainer>
            {!isMobile && (
                <TopContainer>
                    <LeftContainer>
                        <BrandLogo image={footerLogo} logoSize={182} hideTitle />
                    </LeftContainer>
                    <RightContainer>
                        <ContentContainer>
                            <Title>Company</Title>
                            <FooterLink>About</FooterLink>
                        </ContentContainer>
                        <ContentContainer>
                            <Title>License Applicant</Title>
                            <FooterLink>How it works</FooterLink>
                            <FooterLink>Safety Instructions</FooterLink>
                            <FooterLink>Sign Up</FooterLink>
                            <FooterLink>Search for instructor</FooterLink>
                        </ContentContainer>    
                        <ContentContainer>
                            <Title>Instructor</Title>
                            <FooterLink>How it works</FooterLink>
                            <FooterLink>Safety Instructions</FooterLink>
                            <FooterLink>Sign Up</FooterLink>
                        </ContentContainer>   
                        <ContentContainer>
                            <Title>Support</Title>
                            <FooterLink>Help Center</FooterLink>
                            <FooterLink>Contact Us</FooterLink>
                        </ContentContainer> 
                    </RightContainer>                     
                </TopContainer>
            )}
        {!isMobile && (<Marginer direction="vertical" margin={25} />)}
        <BottomContainer>
            <LeftContainer>
                <BrandLogo color="#8a8a8a" textSize={isMobile ? 6 : 12} hideLogo footerGradient />
                <PrivacyText>&#169;2021 All Rights Reserved.</PrivacyText>
            </LeftContainer>
            <RightContainer>
                <SocialIcon>
                    <FontAwesomeIcon icon={faFacebook} />
                </SocialIcon>
                <SocialIcon>
                    <FontAwesomeIcon icon={faTwitter} />
                </SocialIcon>
            </RightContainer>
        </BottomContainer>
    </FooterContainer>
}