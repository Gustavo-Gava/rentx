import { FlatList } from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { ScheduleByUserDTO } from '../../dtos/scheduleByUserDTO'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.header};

  padding: 16px;
  padding-top: ${RFPercentage(6)}px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.background_secondary};

  margin: 40px 0 18px;
`

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.background_secondary};

  margin-bottom: 34px;
`

export const Content = styled.View`
  padding: 16px;
`

export const SchedulesMade = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text};
`

export const SchedulesCount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.title};
`

export const CarList = styled(FlatList as new () => FlatList<ScheduleByUserDTO>)
.attrs({
  contentContainerStyle:{
    padding: 24
  },
  showsVerticalScroll: false
})`


`

export const PeriodWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.background_secondary};

  padding: 14px 24px;
  margin-top: -12px;
  margin-bottom: 16px; 
`

export const PeriodTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text_detail};

`

export const IntervalWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`

export const StartDate = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.title};
`

export const IconWrapper = styled.View`
  margin: 0 10px;
`

export const EndDate = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.title};
`



