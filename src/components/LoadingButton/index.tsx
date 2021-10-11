import React from 'react'
import { ActivityIndicator, TouchableOpacityProps } from 'react-native'

import {
  Container
} from './styles'

interface Props extends TouchableOpacityProps {
  color?: string;
}

export function LoadingButton({ color, ...rest }: Props){
  return (
    <Container color={color} {...rest}>
      <ActivityIndicator 
        color="#202020"
        size="small"
      />
    </Container>
  )
}