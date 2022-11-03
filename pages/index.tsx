import Head from 'next/head'
import {
  Container,
  Main,
  FlexContainer,
  FullPageWrapper
} from '../styles/sharedstyles'
import Card from '../components/Card'
import { TronGrid } from '../components/TronGridPlane'
import { BrandText } from '../components/BrandStyle'

export default function Home() {
  return (
    <Container>
      <FullPageWrapper>
        <TronGrid />
      </FullPageWrapper>
      <Head>
        <title>Codac</title>
        <meta name="description" content="Code Academy Berlin Community" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BrandText>
        CODAC
      </BrandText>
      <FlexContainer>
        <Card href='/signin' name='Log in' />
      </FlexContainer>
    </Container>
  )
}
