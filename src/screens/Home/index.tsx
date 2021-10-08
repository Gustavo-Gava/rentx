import React from 'react'
import { StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import LogoSvg from '../../assets/logo.svg'
import { Car } from '../../components/Car'

import {
  CarList,
  Container, Header, HeaderContent, TotalCars, 
} from './styles'

interface CarData {
  brand: string
  name: string
  rent: {
    period: string;
    price: number;
  }
  thumbnail: string
}

export function Home(){

  const Cars = [
    {
      brand: 'AUDI',
      name: "RS 5 Coupé",
      rent: {
        period: 'Ao dia',
        price: 120,
      },
      thumbnail: 'https://mediaservice.audi.com/media/live/50900/fly1400x601n1/f5f/2021.png?wid=850'
    },
    {
      brand: 'PORSCHE',
      name: "Panamera",
      rent: {
        period: 'Ao dia',
        price: 340,
      },
      thumbnail: 'https://www.webmotors.com.br/imagens/prod/347468/PORSCHE_PANAMERA_2.9_V6_EHYBRID_4_PDK_3474681900348621.png?s=fill&w=130&h=97&q=70&t=true)'
    }
  ]


  return (
    <Container>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      
      <Header>
        <HeaderContent> 
          <LogoSvg 
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotalCars>
            Total de 12 carros
          </TotalCars>
        </HeaderContent>
      </Header>

      <CarList 
        data={Cars}
        keyExtractor={(item: CarData, index) => item.name}
        renderItem={({ item }: CarData) => (
          <Car data={item} />
        )}
      />
    </Container>
  )
}