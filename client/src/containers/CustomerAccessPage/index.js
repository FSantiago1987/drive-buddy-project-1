import React from 'react'
import { useParams } from 'react-router-dom'
import { AccountBox } from '../../components/accountBox'
import { Footer } from '../../components/footer'
import Navbar  from '../../components/navbar'
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