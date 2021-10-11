import styled from 'styled-components/native'

interface ButtonProps {
  color?: string;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  width: 100%;

  justify-content: center;
  align-items: center;

  padding: 19px;

  background-color: ${({ theme, color}) => (
  color ? color
  : theme.colors.main_light
  )};
`

export const Title = styled.Text`
  
  color: ${({ theme }) => theme.colors.shape};
`