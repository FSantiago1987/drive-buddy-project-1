import styled from "styled-components";
import Select from "react-select";

export const BoxContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`;

export const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const MutedLink = styled.a`
    font-size: 12px;
    color: rgba(200, 200, 200, 0.8);
    font-weight: 500;
    text-decoration: none;
    padding: 0px 10px; 
`;

export const BoldLink = styled.a`
    font-size: 12px;
    color: rgb(0,212,255);
    font-weight: 500;
    text-decoration: none;  
    margin: 0 4px; 
`;

export const Input = styled.input`
    width: 100%;
    height: 42px;
    outline: none;
    border: 1px solid rgba(200, 200, 200, 0.3);
    padding: 0px 10px;
    border-bottom: 1.4px solid transparent;
    transition: all 200ms ease-in-out;
    font-size: 12px;

    &::placeholder{
        color: rgba(200, 200, 200, 1);
    }

    &:not(:last-of-type){
        border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
    }

    &:focus{
        outline: none;
        border-bottom: 2px solid rgb(0,212,255);
    }
`;

export const SelectStyled = styled(Select)`
    width: 100%;
    height: 30px !important;
    min-width: 200px;
    outline: none;
    padding: 0px 0px;
    transition: all 200ms ease-in-out;
    font-size: 12px;

    &::placeholder{
        color: rgba(200, 200, 200, 1);
    }
`;

export const SubmitButton = styled.button`
color: #fff;
font-size: 19.5px;
font-weight: 600;
border: none;
border-radius: 3px;
width: 100%;
padding: 11px 20%;
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