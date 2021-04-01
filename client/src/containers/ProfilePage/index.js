import React from 'react'
import { Footer } from '../../components/footer'
import { Marginer } from '../../components/marginer'
import { Navbar } from '../../components/navbar'
import { PageContainer } from '../../components/pageContainer'
import { TopProfile } from './topProfile'




export function Profile(props){
    return <PageContainer>
        <TopProfile>
            <Navbar useTransparent />
        </TopProfile>
        <Marginer direction="vertical" margin="2em" />
        <Footer />
    </PageContainer>
}