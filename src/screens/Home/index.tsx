import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Alert, StatusBar } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { RFValue } from 'react-native-responsive-fontsize'

import api from '../../services/api'
import { CarDTO } from '../../dtos/carDTO'

import LogoSvg from '../../assets/logo.svg'
import { Car } from '../../components/Car'

import {
  CarList,
  Container, Header, HeaderContent, MyCarsButton, TotalCars, 
} from './styles'
import { Loading } from '../../components/Loading'
import theme from '../../styles/theme'

interface CarData {
  brand: string
  name: string
  rent: {
    period: string;
    price: number;
  }
  thumbnail: string
}

interface NavigationProps {
  navigate: (screen: string, car?: object) => void;
}

export function Home(){
  const navigation = useNavigation<NavigationProps>()

  const [cars, setCars] = useState<CarDTO[]>([])
  const [isLoading, setIsLoading] = useState(true)

  function handleCarDetails(car: CarDTO) {
    navigation.navigate("CarDetails", { car })
  }  
  
  function handleScheduleList() {
    navigation.navigate("ScheduleList")
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/cars')
        setCars(response.data)
      } catch {
        Alert.alert("Não foi possível accessar os dados!")
      } finally {
        setIsLoading(false)
      }
    }

    fetchCars()
  }, [])

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
            Total de {cars.length} carros
          </TotalCars>
        </HeaderContent>
      </Header>
      {
        isLoading ? (
          <Loading />
        ) : (
        <CarList 
          data={cars}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
        )
      }

      <MyCarsButton onPress={handleScheduleList}>
        <Ionicons 
          name="ios-car-sport"
          size={32}
          color={theme.colors.background_secondary}
        />
      </MyCarsButton>
    </Container>
  )
}