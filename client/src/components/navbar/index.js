import React, { Component } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BrandLogo } from '../brandLogo';
import { Button } from '../button';
import { Marginer } from '../marginer';
import { deviceSize } from '../responsive';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";


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

const AchorLink = styled.a`
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

const WelcomeMessage = styled.p`
    font-size: 12px;
    color: #fff;
    text-decoration: none;
    outline: none;
`;

const Separator = styled.div`
    height: 35%;
    width: 1px;
    background-color: #fff;
`;

const LinkLogo = styled(Link)`
    text-decoration: none;
`;

const LogoutButton = styled.button`
    border: none;
    outline: none;
    color: #fff;
    padding: 6px 1em;
    font-size: 11px;
    font-weight: 600;
    border-radius: 3px;
    background-color: rgb(227, 78, 78);
    cursor: pointer;
    transition: all 200ms ease-in-out;

    &:hover {
        filter: brightness(1.03);
    }

    &:focus {
        outline: none;
    }
`;


class Navbar extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render() {
        const { useTransparent } = this.props;
        const { user } = this.props.auth;
        let username = user.username;
        return (
            <NavbarContainer useTransparent={useTransparent}>
                <LinkLogo to="/">
                    <BrandLogo logoSize={30} textSize={30} doNotUseGradient />
                </LinkLogo>
                <AccessibilityContainer>
                    {username && (
                        <WelcomeMessage>Welcome, {username} </WelcomeMessage>
                    )}
                    {username && (
                        <Marginer direction="horizontal" margin={10} />
                    )}
                    {username && (
                        <Separator />
                    )}
                    {username && (
                        <Marginer direction="horizontal" margin={10} />
                    )}
                    {username && (
                        <AchorLink href="/profile">My Profile</AchorLink>
                    )}
                    {username && (
                        <Marginer direction="horizontal" margin={10} />
                    )}
                    {username && (
                        <Separator />
                    )}
                    {username && (
                        <Marginer direction="horizontal" margin={10} />
                    )}
                    <AchorLink href="/search_instructor">Search</AchorLink>
                    <Marginer direction="horizontal" margin={10} />
                    <Separator />
                    <Marginer direction="horizontal" margin={10} />
                    <AchorLink href="/rate_instructor">Rate</AchorLink>
                    <Marginer direction="horizontal" margin={10} />
                    <Separator />
                    <Marginer direction="horizontal" margin={10} />
                    {username && (
                        <AchorLink href="/profile">
                            <LogoutButton onClick={this.onLogoutClick}>Logout</LogoutButton>
                        </AchorLink>
                    )}
                    {!username && (
                        <AchorLink href="/customer/access/signup" initialActive='signup'>
                            <Button size={11}>Register</Button>
                        </AchorLink>
                    )}
                    {!username && (
                        <Marginer direction="horizontal" margin={8} />
                    )}
                    {!username && (
                        <AchorLink href="/customer/access/signin" initialActive='signin'>Login</AchorLink>
                    )}
                </AccessibilityContainer>
            </NavbarContainer>
        )
    }
}
Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(Navbar);