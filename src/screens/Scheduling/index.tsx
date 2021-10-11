import React, { useState } from 'react'
import { Alert, StatusBar } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import { BackButton } from '../../components/BackButton'
import { Button } from '../../components/Button'
import { Calendar, DayProps, generateInterval, MarkedDatesProps } from '../../components/Calendar'

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
import { format } from 'date-fns/esm'
import { getPlatformDate } from '../../utils/getPlatformDate'
import { CarDTO } from '../../dtos/carDTO'

interface NavigationProps {
  navigate: (screen: string, { car, dates }: any) => void;
}

interface RentalPeriod {
  start: number;
  startFormatted: string;
  end: number;
  endFormatted: string;
}

interface Params {
  car: CarDTO
}

export function Scheduling(){
  const route = useRoute()
  const { car } = route.params as Params

  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps)
  const [markedDates, setMarkedDates] = useState({} as MarkedDatesProps)
  const [rentalPeriod, setRentalPeriod] = useState({} as RentalPeriod)

  const navigation = useNavigation<NavigationProps>()

  function handleConfirmScheduling() {
    if (!rentalPeriod.start) {
      Alert.alert("Escolha um período")
      return
    }

    navigation.navigate("SchedulingDetails", {
      car,
      dates: Object.keys(markedDates)
    })
  }

  function handleChangeDate(date: DayProps) {
    let start = lastSelectedDate.timestamp ? lastSelectedDate : date
    let end = date

    if(start.timestamp > end.timestamp) {
      start = end
      end = start
    }

    setLastSelectedDate(end)
    const interval = generateInterval(start, end)
    setMarkedDates(interval)

    const firstDate = Object.keys(interval)[0]
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1]

    setRentalPeriod({
      start: start.timestamp,
      end: end.timestamp,
      startFormatted: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyyy'),
      endFormatted: format(getPlatformDate(new Date(endDate)), 'dd/MM/yyyy'),
    })
  }

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
            <DateTitle>DE </DateTitle>
            <DateValue isSelected={rentalPeriod.startFormatted ? true : false}>
              {rentalPeriod.startFormatted}
            </DateValue>
          </DateInfo>

          <ArrowSvg width={48} height={10}/>

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue isSelected={rentalPeriod.endFormatted ? true : false}>
              {rentalPeriod.endFormatted}
            </DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar 
          markedDates={markedDates}
          onDayPress={handleChangeDate}
        />
      </Content>
      
      <Footer>
        <Button title="Confirmar" onPress={handleConfirmScheduling}/>
      </Footer>
    </Container>
  )
}