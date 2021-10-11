import React, { useEffect, useState } from 'react'
import Feather from 'react-native-vector-icons/Feather'

import { BackButton } from '../../components/BackButton'
import { Car } from '../../components/Car'
import { Loading } from '../../components/Loading'

import { ScheduleByUserDTO } from '../../dtos/scheduleByUserDTO'

import api from '../../services/api'
import theme from '../../styles/theme'

import {
  CarList,
  Container, 
  Content, 
  EndDate, 
  Header, 
  IconWrapper, 
  IntervalWrapper, 
  PeriodTitle, 
  PeriodWrapper, 
  SchedulesCount, 
  SchedulesMade, 
  StartDate, 
  SubTitle, 
  Text, 
  Title
} from './styles'

export function ScheduleList(){
  const [cars, setCars] = useState<ScheduleByUserDTO[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/schedules_byuser?user_id=1')
        setCars(response.data)
      } catch (error){
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCars()
  }, [])

  return (
    <Container>
      <Header>
        <BackButton />
        <Title>
          Seus agendamentos, {"\n"}
          estão aqui.
        </Title>
        <SubTitle>Conforto, segurança e praticidade.</SubTitle>
      </Header>
      {
        isLoading ? (
          <Loading />
        ) : (
          <Content>
            <SchedulesMade>
              <Text>Agendamentos feitos</Text>
              <SchedulesCount>{cars.length}</SchedulesCount>
            </SchedulesMade>
          </Content>
        )
    }

      <CarList 
        data={cars}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <>
            <Car 
              data={item.car}
            />
            <PeriodWrapper>
              <PeriodTitle>PERÍODO</PeriodTitle>
              <IntervalWrapper>
                <StartDate>{item.startDate}</StartDate>
                <IconWrapper>
                  <Feather name="arrow-right" color={theme.colors.text} size={14}/>
                </IconWrapper>
                <EndDate>{item.endDate}</EndDate>
              </IntervalWrapper>
            </PeriodWrapper>
          </>
        )}
      />

    </Container>
  )
}