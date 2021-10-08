import React from 'react'

import { useNavigation } from '@react-navigation/native'

import { Acessory } from '../../components/Acessory'
import { BackButton } from '../../components/BackButton'
import { ImageSlider } from '../../components/ImageSlider'
import { Button } from '../../components/Button'

import SpeedSvg from '../../assets/speed.svg'
import AccelerationSvg from '../../assets/acceleration.svg'
import ForceSvg from '../../assets/force.svg'
import GasolineSvg from '../../assets/gasoline.svg'
import ExchangeSvg from '../../assets/exchange.svg'
import PeopleSvg from '../../assets/people.svg'

import {
  About,
  Acessories,
  Brand,
  ButtonWrapper,
  CarImages,
  Container, Content, Description, Details, Footer, Header, Name, Period, Price, Rent
} from './styles'

interface NavigationProps {
  navigate: (screen: string) => void;
}

export function CarDetails(){
  const navigation = useNavigation<NavigationProps>()

  function handleConfirmRental() {
    navigation.navigate("Scheduling")
  }

  return (
    <Container>
      <Header>
        <BackButton 
          color="black"
        />
      </Header>

      <CarImages> 
        <ImageSlider 
          imagesUrl={['https://mediaservice.audi.com/media/live/50900/fly1400x601n1/f5f/2021.png?wid=850']}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 180</Price>
          </Rent>
        </Details>

        <Acessories> 
          <Acessory icon={SpeedSvg} name="380km/h" />
          <Acessory icon={AccelerationSvg} name="3.2s" />
          <Acessory icon={ForceSvg} name="800 HP" />
          <Acessory icon={GasolineSvg} name="Gasolina" />
          <Acessory icon={ExchangeSvg} name="Auto" />
          <Acessory icon={PeopleSvg} name="2 pessoas" />
        </Acessories>

        <About>
          Este é automóvel desportivo. Surgiu do lendário touro 
          de lide indultado na praça Real Maestranza de Sevilla. 
          É um belíssimo carro para quem gosta de acelerar.
        </About>

      </Content>

      <Footer>
        <ButtonWrapper>
          <Button title="Escolher período do aluguel" onPress={handleConfirmRental}/>
        </ButtonWrapper>
      </Footer>
    </Container>
  )
}