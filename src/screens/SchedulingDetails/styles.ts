import { getBottomSpace, getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  margin-top: ${isIphoneX() ? getStatusBarHeight() + 18 : getStatusBarHeight()}px;
  margin-left: 24px;
`

export const CarImages = styled.View`
  margin-top: 32px;
`

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 24,
    alignItens: 'center'
  }
})`

`

export const Details = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Description = styled.View`

`

export const Brand = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text};

  text-transform: uppercase;
`

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.title};
`

export const Rent = styled.View`

`

export const Period = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text};

  text-transform: uppercase;
`

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.main};
`

export const Acessories = styled.View`
  flex-direction: row;
  flex-wrap: wrap;

  align-items: center;
  justify-content: space-between;

  margin-top: 16px;
`

export const Footer = styled.View`
  padding: 24px 24px ${getBottomSpace() + 24}px;
  background-color: ${({ theme }) => theme.colors.background_primary};
`

export const ButtonWrapper = styled.View`` 

export const RentalPeriod = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 40px;
`

export const CalendarIcon = styled.View`
  background-color: ${({ theme }) => theme.colors.main};
  width: 48px;
  height: 48px;

  align-items: center;
  justify-content: center;
`

export const DateInfo = styled.View`

`

export const DateTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text};
`

export const DateValue = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.title};
`

export const Divider = styled.View`
  width: 100%;
  height: 1px;

  margin: 21px 0px 16px;

  background-color: ${({ theme }) => theme.colors.line};
`

export const RentalPrice = styled.View`
`

export const RentalPriceLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text};
`

export const RentalPriceDetails = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const RentalPriceQuota = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.title};
`

export const RentalPriceTotal = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.success};
`
