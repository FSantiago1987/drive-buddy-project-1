import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BrandLogo } from '../brandLogo';
import { Button } from '../button';
import { Marginer } from '../marginer';
import { deviceSize } from '../responsive';

const NavbarContainer = styled.div`
    width: 100%;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5em;

    background-color: ${({ useTransparent }) => useTransparent ? "transparent" : "#264653"};

    @media screen and (max-width: ${deviceSize.mobile}px) {
        justify-content: flex-start;
    }
`;

const AccessibilityContainer = styled.div`
    height:100%;
    display: flex;
    align-items: center;
`;

const AchorLink = styled(Link)`
    font-size: 12px;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    outline: none;
    transition: all 200ms ease-in-out;

    &:hover {
        filter: contrast(0.6);
    }
`;

const Separator = styled.div`
    height: 35%;
    width: 1px;
    background-color: #fff;
`;

const LinkLogo = styled(Link)`
    text-decoration: none;
`;

export function Navbar(props){
    const { useTransparent } = props;
    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile});
    return <NavbarContainer useTransparent={useTransparent}>
        <LinkLogo to="/">
            <BrandLogo logoSize={isMobile ? 25 : 30} textSize={isMobile ? 15 : 30 } doNotUseGradient />
        </LinkLogo>
        <AccessibilityContainer>
            {!isMobile && (
                <AchorLink>Instructor Portal</AchorLink>
            )}
            {!isMobile && (
                <Marginer direction="horizontal" margin={10} />
            )}      
            {!isMobile && (
                <Separator />
            )}       
            <Marginer direction="horizontal" margin={10} />
            <Link to="/customer/access/signup">
                <Button size={11}>Register</Button>
            </Link>
            <Marginer direction="horizontal" margin={8} />
            <AchorLink to="/customer/access/signin">Login</AchorLink>
        </AccessibilityContainer>
    </NavbarContainer>
}