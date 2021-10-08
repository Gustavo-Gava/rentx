import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import {
  Container, Title
} from './styles'

interface Props extends TouchableOpacityProps {
  color?: string;
  title: string;
}

export function Button({ color, title, ...rest }: Props){
  return (
    <Container color={color} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}