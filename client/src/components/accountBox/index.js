import React, { useState } from 'react'
import styled from 'styled-components'
import LoginForm  from './loginForm';
import { motion } from "framer-motion";
import { AccountContext } from './accountContext';
import RegisterForm  from './registerForm';
import TopProfileBackgroundImg from '../../images/backRegister.jpg'

const TopSectionContainer = styled.div`
    font-family: Noto Sans SC;
    font-weight: 100;
    width: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.3) 100%), url(${TopProfileBackgroundImg}) no-repeat;
    background-position: 0px 0px;
    background-size: cover;
`;

const BackgroundFilter = styled.div`
   width: 100%;
   height: 100%;
   background-color: rgba(38, 70, 83, 0.8);
   display: flex; 
   flex-direction: column;
   align-items: center;
`;

const BoxContainer = styled.div`
    width: 350px;
    min-height: 550px;
    display: flex;
    flex-direction: column;
    border-radius: 19px;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
    position: relative;
    overflow: hidden;
    margin: 20px 0px;
`;

const TopContainer = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 1.8em;
    padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
    width: 160%;
    height: 550px;
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    transform: rotate(60deg);
    top: -290px;
    left: -70px;
    background: rgb(0,212,255);
    background: linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(1,163,164,1) 30%, rgba(2,0,36,1) 100%);
`;

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const HeaderText = styled.h2`
    font-family: Noto Sans SC;
    font-weight: 100;
    font-size: 30px;
    font-weight: 600;
    line-height: 1.24;
    align-items: flex-start;
    color: #fff;
    z-index: 10;
    margin: 0;
`;

const SmallText = styled.h5`
    font-family: Noto Sans SC;
    font-weight: 100;
    color: #fff;
    font-weight: 500;
    font-size: 11px;
    z-index: 10;
    margin: 0;
    margin-top: 20px;
    margin-bottom: 40px;
`;

const InnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 01.8em;
`;

const backDropVariants = {
    expanded: {
        width: "233%",
        height: "1050px",
        borderRadius: "20%",
        transform: "rotate(60deg)"
    },
    collapsed: {
        width: "160%",
        height: "550px",
        borderRadius: "50%",
        transform: "rotate(60deg)"
    }
}

const expandingTransition = {
    type: "spring",
    duration: 2.3,
    stiffness: 30,
};


export function AccountBox(props){
    const { initialActive } = props;
    const [isExpanded, setExpanded] = useState(false);
    const [active, setActive] = useState(initialActive ? initialActive : "signin");

    const playExpandingAnimation = () => {
        setExpanded(true);
        setTimeout(() => {
            setExpanded(false);
        }, expandingTransition.duration * 1000 - 1500);
    };

    const switchToSignup = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("signup");
        }, 500);
    }


    const switchToSignin = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("signin");
        }, 500);
    }

    const contextValue = {switchToSignup, switchToSignin};

    return (
        <TopSectionContainer>
            <BackgroundFilter>
                <AccountContext.Provider value={contextValue}>
                    <BoxContainer>
                        <TopContainer>
                            <BackDrop 
                                initial={false} 
                                animate={isExpanded ? "expanded" : "collapsed" } 
                                variants={backDropVariants} 
                                transition={expandingTransition}
                            />
                            {active === "signin" && 
                                <HeaderContainer>
                                    <HeaderText>Welcome</HeaderText>
                                    <HeaderText>Back</HeaderText>
                                    <SmallText>Please sign-in to continue!</SmallText>
                                </HeaderContainer>                   
                            }
                            {active === "signup" && 
                                <HeaderContainer>
                                    <HeaderText>Create</HeaderText>
                                    <HeaderText>Account</HeaderText>
                                    <SmallText>Please sign-up to continue!</SmallText>
                                </HeaderContainer>                   
                            }                    
                        </TopContainer>
                        <InnerContainer>
                            {active === "signin" && <LoginForm />}
                            {active === "signup" && <RegisterForm />}
                        </InnerContainer>
                    </BoxContainer>
            </AccountContext.Provider>
        </BackgroundFilter>
    </TopSectionContainer>
    )
}