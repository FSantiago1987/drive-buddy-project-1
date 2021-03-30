import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { AccountBox } from '../../components/accountBox'
import { Footer } from '../../components/footer'
import { Marginer } from '../../components/marginer'
import { Navbar } from '../../components/navbar'
import { InnerPageContainer, PageContainer } from '../../components/pageContainer'


export function CustomerAccessPage(props){
    const { action } = useParams();

    return (
        <PageContainer>
            <Navbar />
            <InnerPageContainer>
                <AccountBox initialActive={action} />
            </InnerPageContainer>
            <Footer />
        </PageContainer>
    );
}