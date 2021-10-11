import { RFValue } from 'react-native-responsive-fontsize'
import { FlatList } from 'react-native'
import styled from 'styled-components/native'
import { CarDTO } from '../../dtos/carDTO'

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background_primary};
`

export const Title = styled.Text`
  font-size: 30px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
`

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(113)}px;
  padding: 32px 24px;

  justify-content: flex-end;

  background-color: ${({ theme }) => theme.colors.header};
`

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const TotalCars = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
` 

export const CarList = styled(FlatList as new () => FlatList<CarDTO>)
.attrs({
  contentContainerStyle:{
    padding: 24
  },
  showsVerticalScroll: false
})`


`

export const MyCarsButton = styled.TouchableOpacity`
  /* position: fixed;
  left: 0;
  top: 0; */

  border-radius: 9999px;

  justify-content: center;
  align-items: center;

  width: 60px;
  height: 60px;

  background-color: ${({ theme }) => theme.colors.main};

  position: absolute;
  bottom: 0;
  right: 0;

  margin: 0 23px 13px 0;
`