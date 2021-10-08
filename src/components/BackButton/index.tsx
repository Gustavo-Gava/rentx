import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import { useTheme } from 'styled-components'

import {
  Container
} from './styles'

interface Props extends TouchableOpacityProps {
  color?: string
}

export function BackButton({ color, ...rest }: Props){
  const theme = useTheme()

  return (
    <Container {...rest}>
      <Feather 
        name="chevron-left" 
        size={24}
        color={color ? color : theme.colors.text}
      />
    </Container>
  )
}