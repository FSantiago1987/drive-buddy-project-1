import React from 'react'
import styled from 'styled-components'
import { Footer } from '../../components/footer'
import { InstructorAd } from '../../components/instructorAd'
import { Marginer } from '../../components/marginer'
import { Navbar } from '../../components/navbar'
import { InnerPageContainer, PageContainer } from '../../components/pageContainer'
import { deviceSize } from '../../components/responsive'
import { Instructors } from './instructors'
import { TopSection } from './topSection'


const ContentContainer = styled.div`
    width: 100%;
    max-width:${deviceSize.laptop}px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1em;
    
    @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 5px;
  }
`;

export function Homepage(props){
    return <PageContainer>
        <TopSection>
            <Navbar useTransparent />
        </TopSection>
        <Marginer direction="vertical" margin="2em" />
        <InnerPageContainer>
            <ContentContainer>
                <Instructors />
            </ContentContainer>
            <Marginer direction="vertical" margin="5em" />
            <InstructorAd />
            <Marginer direction="vertical" margin="5em" />
        </InnerPageContainer>
        <Footer />
    </PageContainer>
}