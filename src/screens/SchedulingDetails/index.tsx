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

import Feather from 'react-native-vector-icons/Feather'
import { RFValue } from 'react-native-responsive-fontsize'
import theme from '../../styles/theme'
import {
  Acessories,
  Brand,
  ButtonWrapper,
  CalendarIcon,
  CarImages,
  Container, 
  Content, 
  DateInfo, 
  DateTitle, DateValue, Description, Details, Divider, Footer, Header, Name, Period, Price, Rent, RentalPeriod, RentalPrice, RentalPriceDetails, RentalPriceLabel, RentalPriceQuota, RentalPriceTotal
} from './styles'

interface NavigationProps {
  navigate: (screen: string) => void;
}

export function SchedulingDetails(){
  const navigation = useNavigation<NavigationProps>()

  function handleConfirmRent() {
    navigation.navigate("SchedulingComplete")
  }

  return (
    <Container>
      <Header>
        <BackButton 
          onPress={() => {}}
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

        <RentalPeriod>
          <CalendarIcon>
            <Feather 
              name="calendar" 
              size={RFValue(24)} 
              color={theme.colors.shape}/>
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>

          <Feather 
              name="chevron-right" 
              size={RFValue(14)} 
              color={theme.colors.text}/>

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>20/06/2021</DateValue>
          </DateInfo>
        </RentalPeriod>

        <Divider />

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 X 3</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>

      </Content>

      <Footer>
        <ButtonWrapper>
          <Button title="Escolher período do aluguel" onPress={handleConfirmRent}/>
        </ButtonWrapper>
      </Footer>
    </Container>
  )
}