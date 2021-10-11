import React, { useEffect, useState } from 'react'

import { useNavigation, useRoute } from '@react-navigation/native'

import { Acessory } from '../../components/Acessory'
import { BackButton } from '../../components/BackButton'
import { ImageSlider } from '../../components/ImageSlider'
import { Button } from '../../components/Button'

import { getAccessoryIcon } from '../../utils/getAccessoryIcon'
import { CarDTO } from '../../dtos/carDTO'

import Feather from 'react-native-vector-icons/Feather'
import { RFValue } from 'react-native-responsive-fontsize'
import theme from '../../styles/theme'
import {
  Accessories,
  Brand,
  ButtonWrapper,
  CalendarIcon,
  CarImages,
  Container, 
  Content, 
  DateInfo, 
  DateTitle, DateValue, Description, Details, Divider, Footer, Header, Name, Period, Price, Rent, RentalPeriod, RentalPrice, RentalPriceDetails, RentalPriceLabel, RentalPriceQuota, RentalPriceTotal
} from './styles'
import { getPlatformDate } from '../../utils/getPlatformDate'
import { format } from 'date-fns'
import api from '../../services/api'
import { Alert } from 'react-native'
import { LoadingButton } from '../../components/LoadingButton'

interface NavigationProps {
  navigate: (screen: string) => void;
}

interface Params { 
  car: CarDTO
  dates: string[]
}

interface RentalPeriod {
  start: string;
  end: string;
}

interface SchedulesByCar {
  data: {
    id: string
    unavailable_dates: string[]
  }
}

export function SchedulingDetails(){
  const route = useRoute()
  const { car, dates } = route.params as Params
  const navigation = useNavigation<NavigationProps>()
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)
  const [isLoading, setIsLoading] = useState(false)

  async function handleConfirmRent() {
    setIsLoading(true)

    const schedulesByCar: SchedulesByCar = await api.get(`/schedules_bycars/${car.id}`)

    const unavailable_dates = [
      ...schedulesByCar.data.unavailable_dates,
      ...dates
    ]

    try {
      await api.post('schedules_byuser', {
        user_id: 1,
        car,
        startDate: rentalPeriod.start,
        endDate: rentalPeriod.end,
      })

      await api.put(`/schedules_bycars/${car.id}`, {
        id: car.id,
        unavailable_dates
      })
      navigation.navigate('SchedulingComplete')
    } catch {
      Alert.alert("Não foi possível confirmar o agendamento!!")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    setRentalPeriod({
      start: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
      end: format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy')
    })
  }, [])

  return (
    <Container>
      <Header>
        <BackButton 
          color="black"
        />
      </Header>

      <CarImages> 
        <ImageSlider 
          imagesUrl={[car.thumbnail]}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>{`R$ ${car.rent.price}`}</Price>
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

        <RentalPeriod>
          <CalendarIcon>
            <Feather 
              name="calendar" 
              size={RFValue(24)} 
              color={theme.colors.shape}/>
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>{rentalPeriod.start}</DateValue>
          </DateInfo>

          <Feather 
              name="chevron-right" 
              size={RFValue(14)} 
              color={theme.colors.text}/>

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>{rentalPeriod.end}</DateValue>
          </DateInfo>
        </RentalPeriod>

        <Divider />

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>{`R$ ${car.rent.price} X ${dates.length} diárias`}</RentalPriceQuota>
            <RentalPriceTotal>R$ {car.rent.price * dates.length}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>

      </Content>

      <Footer>
        <ButtonWrapper>
          { isLoading ? (
            <LoadingButton color={theme.colors.success}/>
          )
            : (
              <Button 
              title="Alugar Agora" 
              color={theme.colors.success} 
              onPress={handleConfirmRent}
            />
            )  
        }
        </ButtonWrapper>
      </Footer>
    </Container>
  )
}