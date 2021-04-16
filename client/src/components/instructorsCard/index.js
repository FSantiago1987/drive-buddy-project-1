import { faCar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import styled from 'styled-components'
import { Marginer } from '../marginer';
import driver1 from '../../images/thumbnails/teddriver.jpg';
import driver2 from '../../images/thumbnails/driver2.jpg';
import driver3 from '../../images/thumbnails/toretto.jpg';
import driver4 from '../../images/thumbnails/phoebe.jpg';

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 300px;
    min-height: 250px;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
    margin: 0.5em;
    margin-bottom: 1.3em;
`;

const TopContainer = styled.div`
    width:100%;
`;

const InstructorThumbnail = styled.div`
    width: 100%;
    height: 11em;
    
    img {
        width: 100%;
        height: 100%
    }
`;

const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;
    padding: 15px 10px;
`;

const BottomContainer = styled.div`
    width: 100%;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid rgba(15, 15, 15, 0.19);
    padding: 0 10px;
`;

const Title = styled.h2`
    font-size: 18px;
    margin: 0;
    font-weight: 500;
    color: #000;
    text-align: start;
`;

const InstructorName = styled.h4`
    margin: 0;
    color: rgba(151, 151, 151, 1);
    font-size: 12px;
    font-weight: 400;
`;

const RatingContainer = styled.div`
    display: flex;
    color: #04A4F6;
    align-items: center;
`;

const PriceContainer = styled.div`
    display: flex;
    align-items: center;
`;

const PriceText = styled.div`
    margin-left: 3px;
    color: #2ba679;
    font-weight: 700;
`;

const StartingAtText = styled.h6`
    margin: 0;
    color: rgba(161, 161, 161, 1);
    font-weight: 400;
`;

export function InstructorCard(props){
    const {id, title, rating, rate, name} = props;
    const images = [driver1, driver2, driver3, driver4]

    return <CardContainer>
        <TopContainer>
            <InstructorThumbnail>
                <img src={images[id-1]} alt={name}/>
            </InstructorThumbnail>
        </TopContainer>
        <ContentContainer>
            <Title>{title}</Title>
            <Marginer direction="vertical" margin={12} />
            <InstructorName>{name}</InstructorName>
        </ContentContainer>
        <BottomContainer>
            <RatingContainer>
                <FontAwesomeIcon icon={faCar} size="sm" />
                <Marginer direction="horizontal" margin={5} />
                {rating}.0
            </RatingContainer>
            <PriceContainer>
                <StartingAtText>STARTING AT</StartingAtText>
                <PriceText>${rate}/hr</PriceText>
            </PriceContainer>
        </BottomContainer>
    </CardContainer>
}