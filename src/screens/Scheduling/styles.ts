import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

interface DateValueProps {
  isSelected: boolean
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 32px 24px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.background_secondary};
  line-height: ${RFValue(34)}px;

  margin-top: ${RFValue(41)}px;
`

export const RentalPeriod = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  margin-top: 32px;
`

export const DateInfo = styled.View`
  
`

export const DateTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
`

export const DateValue = styled.Text<DateValueProps>`
  color: ${({ theme }) => theme.colors.background_primary};
  margin-top: 20px;

  ${({ theme, isSelected }) => !isSelected && css`
    border-bottom-width: 1px;
    border-style: solid;
    border-color: ${theme.colors.text};
  `}
`

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 24
  },
  showsVerticalScroll: false,
})`

`

export const Footer = styled.View`
  padding: 24px;
`
