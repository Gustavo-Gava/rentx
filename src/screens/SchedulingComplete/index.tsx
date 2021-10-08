import React from 'react'
import { StatusBar, useWindowDimensions } from 'react-native'

import LogoSvg from '../../assets/logo_background_gray.svg'
import DoneSvg from '../../assets/done.svg'

import {
  Container, 
  Content, 
  Header, 
  Message, 
  TextButton, 
  Title,
  Button
} from './styles'
import { useNavigation } from '@react-navigation/native'

interface NavigationProps {
  navigate: (screen: string) => void;
}

export function SchedulingComplete(){
  const navigation = useNavigation<NavigationProps>()
  const { width } = useWindowDimensions()

  function handleConfirmRent() {
    navigation.navigate("Home")
  }
  
  return (
    <Container>
      <StatusBar 
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <LogoSvg
          width={width} 
        />
      </Header>

      <Content>
        <DoneSvg />

        <Title>Carro alugado!</Title>

        <Message>
          Agora você só precisa ir {"\n"}
          até a concessionária da RENTX {"\n"}
          pegar o seu automóvel.
        </Message>

        <Button>
          <TextButton onPress={handleConfirmRent}>OK</TextButton>
        </Button>
      </Content>
    </Container>
  )
}