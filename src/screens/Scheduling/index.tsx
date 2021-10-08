import React from 'react'
import { StatusBar } from 'react-native'

import { BackButton } from '../../components/BackButton'

import ArrowSvg from '../../assets/arrow.svg'

import theme from '../../styles/theme'
import {
  Container, 
  Header, 
  Title, 
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from './styles'
import { Button } from '../../components/Button'
import { Calendar } from '../../components/Calendar'

export function Scheduling(){
  return (
    <Container>
      <Header>
        <StatusBar 
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton color={theme.colors.background_secondary}/>
        <Title>
          Escolha uma {"\n"}
          data de início e {"\n"}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue isSelected={false}>
              18/06/2021
            </DateValue>
          </DateInfo>

          <ArrowSvg width={48} height={10}/>

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue isSelected={false}>
              18/06/2021
            </DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar />
      </Content>
      
      <Footer>
        <Button title="Confirmar"/>
      </Footer>
    </Container>
  )
}