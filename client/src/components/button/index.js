import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
    border: none;
    outline: none;
    color: #fff;
    padding: 6px 1em;
    font-size: ${({ size }) => size ? size + "px" : "30px"};
    font-weight: 600;
    border-radius: 3px;
    background-color: ${({ color }) => color ? color : "#2a9d8f"};
    cursor: pointer;
    transition: all 200ms ease-in-out;

    &:hover {
        background-color: #21867a;
    }

    &:focus {
        outline: none;
    }
`;

export function Button(props) {
    const { size, color } = props;
    return <ButtonWrapper size={size} className={props.className} color={color}>
        {props.children}
    </ButtonWrapper>
}
