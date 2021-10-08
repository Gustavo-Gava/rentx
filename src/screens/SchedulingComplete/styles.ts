import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.header};
`

export const Header = styled.View`
  margin-top: 30px;
`

export const Content = styled.View`
  align-items: center;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.background_secondary};

  margin-top: 46px;
`

export const Message = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text_detail};

  text-align: center;

  margin-top: 16px;
`

export const Button = styled.TouchableOpacity`
  padding: 15px 30px;
  background-color: ${({ theme }) => theme.colors.shape_dark};

  margin-top: ${RFValue(80)}px;
`


export const TextButton = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.background_secondary};
`
