import React from 'react'

import { useNavigation, useRoute } from '@react-navigation/native'

import { Acessory } from '../../components/Acessory'
import { BackButton } from '../../components/BackButton'
import { ImageSlider } from '../../components/ImageSlider'
import { Button } from '../../components/Button'

import SpeedSvg from '../../assets/speed.svg'

import {
  About,
  Accessories,
  Brand,
  ButtonWrapper,
  CarImages,
  Container, Content, Description, Details, Footer, Header, Name, Period, Price, Rent
} from './styles'
import { CarDTO } from '../../dtos/carDTO'
import { getAccessoryIcon } from '../../utils/getAccessoryIcon'

interface NavigationProps {
  navigate: (screen: string) => void;
}

interface Params {
  car: CarDTO
}

export function CarDetails(){
  const navigation = useNavigation<NavigationProps>()
  const route = useRoute()
  const { car } = route.params as Params

  function handleConfirmRental() {
    navigation.navigate("Scheduling")
  }

  console.log(getAccessoryIcon('acceleration'))
  console.log(car.accessories)

  return (
    <Container>
      <Header>
        <BackButton 
          color="black"
        />
      </Header>

      <CarImages> 
        <ImageSlider 
          imagesUrl={car.photos}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>

        <Accessories> 
          {car.accessories.map(acessory => (
            <Acessory 
              key={acessory.name}
              icon={getAccessoryIcon(acessory.type)} 
              name={acessory.name} />
          ))}
          
        </Accessories>

        <About>
          {car.about}
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