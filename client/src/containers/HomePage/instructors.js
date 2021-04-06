import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button } from '../../components/button';
import { InstructorCard } from '../../components/instructorsCard';
import { deviceSize } from '../../components/responsive';

const InstructorContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Title = styled.h1`
    font-weight: 900;
    color: #000;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        font-size: 25px;
    }
`;

const InstructorWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;

`;

const BottomContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const WarningText = styled.h3`
    color: rgba(100, 100, 100);
    font-weight: 500;
`;

const ViewMoreButton = styled(Button)`
    background-color: #f2f2f2;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
    font-weight: 500;
    color: #959595;
    font-size: 14px;

    &:hover {
        background-color: #f2f2f2;
        filter: contrast(0.8);
    }
`;

const wait = (num) => new Promise((rs) => setTimeout(rs, num));


export function Instructors(props){
    const [mostUsedInstructors, setMostUsedInstructors] = useState([]);

    const [isLoading, setLoading] = useState(false);

    const isMostUsedInstructorsEmpty = !mostUsedInstructors || (mostUsedInstructors && mostUsedInstructors.length === 0);

    const FetchInstructors = async () => {
        setLoading(true);
        const response = await axios.get("/api/users/instructors").catch((err) => {
            console.log("Error: ", err);
        });
        if(response.data) {
            setMostUsedInstructors(response.data);
        }

        setLoading(false);
    }

    useEffect(() => {
        FetchInstructors();
      }, []);

    return <InstructorContainer>
        <Title>Most Used Instructors</Title>
        <InstructorWrapper>
            {isMostUsedInstructorsEmpty && !isLoading && (
                <WarningText>No Instructor has registered yet!</WarningText>
            )}
            {isLoading && (
                <WarningText>Loading...</WarningText>
            )}
            {!isMostUsedInstructorsEmpty && 
            !isLoading && 
            mostUsedInstructors.map(
                (instructor, idx) => (
                    <InstructorCard key={idx} {...instructor} />
                ))}
        </InstructorWrapper>
        <BottomContainer>
            {!isMostUsedInstructorsEmpty && 
            !isLoading && (
                <ViewMoreButton>View More</ViewMoreButton>
            )}
        </BottomContainer>
    </InstructorContainer>
}