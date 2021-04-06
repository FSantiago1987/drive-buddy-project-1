import React from 'react';
import styled from 'styled-components';
import TopUsersListBackgroundImg from '../../images/car.jpg'
import { Marginer } from '../../components/marginer';
import { deviceSize } from '../../components/responsive';
import FormUsersList from '../../components/UsersListForm';

const TopSectionContainer = styled.div`
    width: 100%;
    height: 800px;
    background: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.3) 100%), url(${TopUsersListBackgroundImg}) no-repeat;
    background-position: 0px -50px;
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
    justify-content: flex-start;


    @media screen and (max-width: ${deviceSize.mobile}px) {
        justify-content: center;
    }
`;


const UsersListContainer = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-left: 10%;
    margin-top: 3%;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        justify-content: center;
        align-items: center;
        min-width: 200px;
        margin-left: 3%;
    }
`;

const TitleText = styled.h1`
    margin: 0;
    line-height: 1.4;
    color: #fff;
    font-weight: 400;
    font-size: 2.75rem;
    justify-content: flex-start;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        font-size: 24px;
    }
`;

const MessageIcon = styled.div`
    color: #fff;
    font-size: 1.8rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: background-color, 200ms ease-in-out;

    &:not(:last-of-type){
        margin-right: 10px;
    }

    &:hover {
        color: #fff;
    }

    @media screen and (max-width: ${deviceSize.mobile}px) {
        margin-right: 2px;
        font-size: 14px;
    }
`;

const MessageText = styled.p`
    font-size: 1rem;
    color: #fff;
`

export function TopUsersList(props) {
    const { children } = props;
    return <TopSectionContainer>
        <BackgroundFilter>
            {children}
            <TopSectionInnerContainer>
                <UsersListContainer>
                    <TitleText>All Users</TitleText>
                    <Marginer direction="vertical" margin="2em" />
                    <FormUsersList />
                </UsersListContainer>
            </TopSectionInnerContainer>
        </BackgroundFilter>
    </TopSectionContainer>
}